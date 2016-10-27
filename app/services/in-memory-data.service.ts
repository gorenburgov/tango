import { InMemoryDbService } from 'angular2-in-memory-web-api';
import {DeviceModel} from "../models/device.model";

/**
 * In-memory mockup service for application
 */
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let devices = [
            {id: 11, brand:"", model: 'SIM cards', type:DeviceModel.TYPE_OTHER, minPrice:9,maxPrice:0,isRefubrished:false,hasCDMA:true,hasGSM:true, isOnSale:true, creationDate: new Date(), imgFile:"simCard.png"},
            {id: 12, brand:"Kyocera", model: 'Dura XTP', type:DeviceModel.TYPE_FEATUREPHONE, minPrice:63,maxPrice:63,isRefubrished:true,hasCDMA:true,hasGSM:false, isOnSale:true, creationDate:'11-OCT-2016', imgFile:"Kyocera_duraXTP_Front_Small.jpg"},
            {id: 13, brand:"Apple", model: 'iPhone 4 White', type:DeviceModel.TYPE_SMARTPHONE, minPrice:87,maxPrice:87,isRefubrished:true,hasCDMA:true,hasGSM:false, isOnSale:true, creationDate:'11-OCT-2016', imgFile:"Apple-iPhone-4-White_small.jpg"},
            {id: 14, brand:"Apple", model: 'iPhone 4s White', type:DeviceModel.TYPE_SMARTPHONE, minPrice:138,maxPrice:138,isRefubrished:true,hasCDMA:true,hasGSM:false, isOnSale:true, creationDate: new Date(), imgFile:"Apple-iPhone-4-White_small.jpg"},
            {id: 15, brand:"Motorola", model: 'Moto G4 Play', type:DeviceModel.TYPE_SMARTPHONE, minPrice:149,maxPrice:0,isRefubrished:false,hasCDMA:true,hasGSM:true, isOnSale:true, creationDate:'11-OCT-2016', saleProfit:"23", imgFile:"G4play_black_front_Small.jpg"},
            {id: 16, brand:"BLU", model: 'Life One X Black', type:DeviceModel.TYPE_SMARTPHONE, minPrice:158,maxPrice:158,isRefubrished:false,hasCDMA:false,hasGSM:true, isOnSale:true, creationDate:'11-OCT-2016', imgFile:"blu_life_onexblk_front_Small.jpg"},
            {id: 21, brand:"Samsung", model: 'J3 White', type:DeviceModel.TYPE_SMARTPHONE, minPrice:100,maxPrice:100,isRefubrished:false,hasCDMA:false,hasGSM:true, isOnSale:true, creationDate:'11-OCT-2016', imgFile:"samsung.jpg"},
            {id: 17, brand:"Alcatel", model: 'A392', type:DeviceModel.TYPE_FEATUREPHONE, minPrice:63,maxPrice:63,isRefubrished:false,hasCDMA:false,hasGSM:true, isOnSale:true, creationDate:'11-OCT-2016', imgFile:"a392_front_closed_Small.jpg"},
            {id: 18, brand:"Apple", model: 'iPhone 4 Black', type:DeviceModel.TYPE_SMARTPHONE, minPrice:138,maxPrice:138,isRefubrished:true,hasCDMA:true,hasGSM:false, isOnSale:true, creationDate:'11-OCT-2016', imgFile:"Apple-iPhone-4s-Black_small.jpg"},
            {id: 19, brand:"Samsung", model: 'J3 White', type:DeviceModel.TYPE_SMARTPHONE, minPrice:163,maxPrice:163,isRefubrished:false,hasCDMA:false,hasGSM:true, isOnSale:true, creationDate:'11-OCT-2016', imgFile:"J3_Gold_front_Small.jpg"},

        ];
        return {devices};
    }
}
