import { Component, OnInit } from '@angular/core';
import {SignUpService} from "../../services/SignUpService";
import {AccountModel} from "../../models/account.model";
import {Router} from "@angular/router";
@Component({
    moduleId: module.id,
    selector: 'service-address',
    templateUrl: 'service-address.component.html'
})

/**
 * Input service address component. It complete sign up flow
 */
export class ServiceAddressComponent implements OnInit {
    constructor(
        private signUpService:SignUpService,
        private router:Router
    ){};
    private accountModel:AccountModel;

    ngOnInit(): void {
        this.accountModel = this.signUpService.getAccount();
    }
    submitted = false;
    completed = false;

    commitAddress (formValid: boolean) {
        this.submitted = true;
        if (formValid) {
            this.completed = true;

        }

    };

}