import {AccountModel} from "../models/account.model";
import {Injectable} from "@angular/core";
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


/**
 * The service for application shared data
 */


@Injectable()
export class SignUpService {
    private account:AccountModel;
    public saveAccount(newAccount:AccountModel){
        this.account = newAccount;
    }
    public getAccount():AccountModel{
        return this.account;
    }


}
