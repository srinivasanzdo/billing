import { AccountViewService } from '../service/AccountViewService';


export class AccountViewBusiness  {
    private accountViewService = new AccountViewService();

    constructor() {

    }
    async getUserList(data: any): Promise<any> {
        let gameDetail = await this.accountViewService.getUserList(data);
        return gameDetail;
    }

  

}