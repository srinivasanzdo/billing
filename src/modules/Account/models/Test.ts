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

}