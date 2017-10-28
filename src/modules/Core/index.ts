import { BaseRoutes as _BaseRoutes } from "./BaseRoutes";
import { BaseService as _BaseService } from "./service/BaseService";
import { BaseController as _BaseController } from "./controller/BaseController";
import { BaseHelper as _BaseHelper } from "./helper/BaseHelper";
import { BaseMiddleware as _BaseMiddleware } from "./middleware/BaseMiddleware";
import { BaseException as _BaseException } from "./exception/BaseException";
import { BaseTransformation as _BaseTransformation } from "./transformation/BaseTransformation";
import { BaseValidation as _BaseValidation } from "./validation/BaseValidation";
import { BaseMailer as _BaseMailer } from "./mailer/BaseMailer";


export namespace Core {
    export const BaseRoutes = _BaseRoutes;
    export const BaseService = _BaseService;
    export const BaseController = _BaseController;
    export const BaseHelper = _BaseHelper;
    export const BaseMiddleware = _BaseMiddleware;
    export const BaseException = _BaseException;
    export const BaseTransformation = _BaseTransformation;
    export const BaseValidation = _BaseValidation;
    export const BaseMailer = _BaseMailer;
    export const viewEnv = {
        AWS_ACCESS_KEY: process.env.S3_ADMIN_AWS_ACCESS_KEY,
        AWS_SECRET_ACCESS_KEY: process.env.S3_ADMIN_AWS_SECRET_ACCESS_KEY,
        AWS_REGION: process.env.AWS_REGION,
        TEMP_AWS_BUCKET: process.env.TEMP_AWS_BUCKET
    }
}