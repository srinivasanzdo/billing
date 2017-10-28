// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
import * as os from 'os'; // native node.js module
const jetpack = require('fs-jetpack'); // module loaded from npm
import env from './env';

import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./Routes";
import { Sequelize } from 'sequelize-typescript';
import { UrlHandler, ModuleHandler } from './helpers/index';
import * as Modules from "./modules/index";
import { moduleConfig } from './config/moduleConfig';

console.log('Loaded environment variables:', env);

const app = express();
const server = require("http").Server(app);
const router = express.Router();
const routes = new Routes(router, app);
const engine = require('ejs-locals');
const path = require('path');

export class Server {

  static sequelize: Sequelize;

  constructor() {
    app.engine('ejs', engine);
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(function (req, res, next) {
      res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
      next();
    });
    this.routes(UrlHandler);
    app.use("/", routes.Routes());
    this.connectDb();
    this.testDb();
    this.listen();
  }

  listen() {
    server.listen(3000, () => { });
    console.log("Server listen....");
  }

  connectDb() {
    Server.sequelize = new Sequelize({
      name: env.db_database,
      dialect: env.db_dialect,
      username: env.db_username,
      password: env.db_password,
      host: env.db_host,
      port: env.db_port,
      modelPaths: ModuleHandler(this.addModule())
    });
  }

  testDb() {
    Server.sequelize
      .authenticate()
      .then(err => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });
  }

  addModule() {
    return moduleConfig;
  }

  routes(baseUrl) {
    let self = this;
    self.addModule().forEach((element) => {
      self.factory(element, baseUrl);
    })
  }

  factory(data: any, baseUrl: any) {
    console.log(baseUrl(data.toLowerCase()));
    console.log(new Modules[data + "Routes"](express.Router()).Routes());
    app.use(baseUrl(data.toLowerCase()), new Modules[data + "Routes"](express.Router()).Routes());
  }

}