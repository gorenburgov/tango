export class DeviceModel {
    constructor(
        public id: number,
        public brand:string,
        public model:string,
        public type:number,
        public minPrice:number,
        public maxPrice:number,
        public isRefubrished: Boolean,
        public hasCDMA:Boolean,
        public hasGSM:Boolean,
        public isOnSale:Boolean,
        public creationDate:Date,
        public imgFile:String,
        public saleProfit:Number = 0
    ){

    }

    public static TYPE_OTHER:Number = 0;
    public static TYPE_SMARTPHONE:Number = 1;
    public static TYPE_FEATUREPHONE:Number = 2;


    public static getNetworkList(device:DeviceModel):Array <string> {
        let ret = [];
        if (device.hasGSM) ret.push('GSM');
        if (device.hasCDMA) ret.push('CDMA');
        return ret;

    }
}
