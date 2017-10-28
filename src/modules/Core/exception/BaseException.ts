export class BaseException {
    private errors: any;

    constructor(errors) {
        this.errors = errors;
    }

    ThrowException(code) {
        if(code){
            return {
                code: code,
                message: this.errors[code]
            };
        }
        return {
            code: "2000",
            message: "Server Error"
        }
    }
}