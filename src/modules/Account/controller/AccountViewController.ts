import { Request, Response, NextFunction } from "express";
import { Core } from "../../Core/index";
import { Test } from "../models/Test";
import { AccountViewBusiness } from "../business/AccountViewBusiness";

export class AccountViewController extends Core.BaseController { ddad

    constructor() {
        super();
    }
    private accountViewBusiness = new AccountViewBusiness();

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
                return res.render('modules/Account/views/user', { "title": "After login"});
            } catch (e) {
                return "";
            }
        };

    }

    getUserList() {
        let self = this;
        return async (req: any, res: any) => {
            let result = await self.accountViewBusiness.getUserList(req.query);
            let data = {
                data: result,
                recordsTotal: 4,
                recordsFiltered: 4,
                draw: req.query.draw++
            }
            return res.send(data);
        }
    }
}