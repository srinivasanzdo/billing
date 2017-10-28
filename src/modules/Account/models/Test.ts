import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table({
    tableName: "test"
})

export class Test extends Model<Test>{

    @PrimaryKey
    @Column
    id: number;

    @Column
    fname: string;

}