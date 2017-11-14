
import { Request, Response } from "express";
import { Core } from "../../Core";
import { Test } from "../models/Test";

export class AccountViewService extends Core.BaseService {

    async getUserList(data: any): Promise<any> {
        try {
            let result = await Test.findAll<Test>();
            return result;
        } catch (e) {
            return e
        }
    }

}