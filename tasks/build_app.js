'use strict';

const path = require('path');
var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var ts = require('gulp-typescript');
var plumber = require('gulp-plumber');
var jetpack = require('fs-jetpack');
var bundle = require('./bundle');
var utils = require('./utils');
var runsequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');

var projectDir = jetpack;
var srcDir = jetpack.cwd('./src');
var distDir = jetpack.cwd('./dist');
var destDir = jetpack.cwd('./app');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('ts', function () {
    var tsResult = gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init()) 
        .pipe(tsProject());
    return tsResult.js
    .pipe(sourcemaps.write({
        includeContent: false,
        sourceRoot: function (file) {
          // Difference from westy92's solution:
          //   file.path contains the absolute file path (including file name),
          //   so I get the file's directory and calculate the relative path to the base directory.
          return path.relative(path.dirname(file.path), file.base);
        }
      }))
    .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
    return gulp.src('src/stylesheets/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(distDir.path('stylesheets')));
});

gulp.task('environment', function () {
    var configFile = 'config/env_' + utils.getEnvName() + '.json';
    projectDir.copy(configFile, distDir.path('env.json'), { overwrite: true });
});

gulp.task('ejs', function () {
    return gulp.src(['src/views/**', 'src/**/**/**.ejs'])
        .pipe(gulp.dest(distDir.path('views')));
});


gulp.task('js', function () {
    return gulp.src('src/assets/**/*.js')
        .pipe(gulp.dest('dist/assets'));
});

gulp.task('watch', function () {
    var beepOnError = function (done) {
        return function (err) {
            if (err) {
                utils.beepSound();
            }
            done(err);
        };
    };

    watch(['src/assets/**', 'src/**/**/**.js'], { ignoreInitial: false })
        .pipe(gulp.dest(distDir.path('assets')));


    watch(['src/views/**', 'src/**/**/**.ejs'], { ignoreInitial: false })
        .pipe(gulp.dest(distDir.path('views')));

    watch('src/**/*.ts', batch(function (events, done) {
        runsequence('ts', done);
    }));

    watch(['src/stylesheets/**/*.scss'], { ignoreInitial: false })
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(destDir.path('stylesheets')));

});

gulp.task('clean', function () {
    return gulp.src('app', { read: false })
        .pipe(clean());
});

gulp.task('move', function () {
    return gulp.src(['dist/**'])
        .pipe(gulp.dest('app'));
});


gulp.task('build', runsequence('ts', 'sass', 'environment', 'ejs', 'clean', 'move', 'js'));
