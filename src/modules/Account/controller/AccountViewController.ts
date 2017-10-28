import { Request, Response, NextFunction } from "express";
import { Core } from "../../Core/index";
import { Test } from "../models/Test";

export class AccountViewController extends Core.BaseController {

    constructor() {
        super();
    }

    index() {
        let self = this;
        return async (req: any, res: any) => {
            return "test.....";
        }
    }

    getList(): any {
        let self = this;
        return async (req: Request, res: Response) => {
            try {
                return res.render('modules/Account/views/user', { "title": "ttttt"});
            } catch (e) {
                return "";
            }
        };

    }
}