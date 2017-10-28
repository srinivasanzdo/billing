import { Router } from "express";
import { Core } from "../Core/index";
import { AccountViewController } from "./controller/AccountViewController";

export class Routes extends Core.BaseRoutes {
    private route: Router;
    private accountViewController: AccountViewController = new AccountViewController();
    
    constructor(route: Router) {
        super();
        this.route = route;
    }

    Routes() {
        let self = this;

        self.route.get("/test", self.accountViewController.getList());
        
        return self.route;
    }
}



