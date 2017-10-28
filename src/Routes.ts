import { Response, Request, Router, Express } from "express";
import { Server } from "./app";

export class Routes {
    private route: Router;
    private app: Router;
    
    constructor(route: Router, app: Express) {
        this.route = route;
        this.app = app;
    }

    Routes() {
        let self = this;
        self.route.get("/", async (req: any, res: any) => {
            res.render('test',{ "title": "Login"});
        });
        return self.route;
    }
}
