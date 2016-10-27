export class AccountModel {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public businessName: string,
        public accountType: boolean,
        public phone: string,
        public email: string,
        public password: string,
        public confirmPassword: string,
        public sendNews: boolean,
        public sendDeviceAlerts: boolean,
        public sendNps: boolean,
        public zipCode:string,
        public state:string,
        public address:string,
        public city:string

    ){

    }
}

