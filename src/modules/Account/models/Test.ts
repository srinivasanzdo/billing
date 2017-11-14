import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table({
    tableName: "tbl_users"
})

export class Test extends Model<Test>{

    @PrimaryKey
    @Column
    id: number;

    @Column
    username: string;

    @Column
    firstname: string;

    @Column
    lastname: string;

    @Column
    companyname: string;

    @Column
    phoneno: string;

    @Column
    email: string;

    @Column
    password: string;

    @Column
    isActive: number;

    @Column
    createdAt: Date;

    @Column
    modifiedAt: Date;

    @Column
    deletedAt: Date;

    @Column
    isAdmin: number;

}