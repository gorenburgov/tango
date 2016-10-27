import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {DeviceModel} from "../../models/device.model";
import {DeviceService} from "../../services/device.service";

@Component({
    moduleId: module.id,
    selector: 'my-devices',
    templateUrl: 'devices.component.html',
    styleUrls:['devices.component.css']
})

/**
 * Show device list
 */
export class DevicesComponent implements OnInit {
    devices: DeviceModel[];
    selectedDevice: DeviceModel;
    currentDate: Date = new Date();
    static  MS_IN_DAY:Number = 24*3600*1000;

    constructor(
        private router: Router,
        private deviceService: DeviceService) { }

    getDevices(): void {
        this.deviceService.getDevices().then(
            devices => this.devices = devices
        );
    }

    ngOnInit(): void {
        this.getDevices();
    }

    isJustAdded(creationDate):Boolean {
       return this.currentDate.getTime() - (new Date(creationDate)).getTime() < DevicesComponent.MS_IN_DAY;
    }

    onSelect(device: DeviceModel): void {
        this.selectedDevice = device;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedDevice.id]);
    }

    getNetworkList(device:DeviceModel):String {
        return DeviceModel.getNetworkList(device).join(',');
    }

    sortPriceDown():void {

    }

    sortPriceUp():void {

    }


}