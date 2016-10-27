import {Component, OnInit} from '@angular/core';
import {AccountModel} from "../../models/account.model";
import {Router} from "@angular/router";
import {SignUpService} from "../../services/SignUpService";
@Component({
    moduleId: module.id,
    selector: 'account-create',
    templateUrl: 'account-create.component.html'
})

/**
 * Component for account creation
 */

export class AccountCreateComponent
{
    constructor(private router: Router, private signUpService:SignUpService){}

    loaded = false;
    model = this.createAccount();
    submitted = false;
    active = true;

    createAccount() {
        return new AccountModel(1,'', '','' ,true,'','','','',true,true,true,'','','','');
    };

    newAccount(formValid: boolean) {
        this.submitted = true;
        if (formValid) {
            this.signUpService.saveAccount(this.model);
            let link = ['/address'];
            console.log('newAccount');
            this.router.navigate(link);
        }
    };
}

