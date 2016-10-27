import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


import {DeviceModel} from "../models/device.model";

/**
 * This servise is communicating with mockup for accuring device data
 */

@Injectable()
export class DeviceService {
    private devicesUrl = 'app/devices';  // URL to web api

    constructor(private http: Http) { }

    public static SORT_NONE:number = 0;
    public static SORT_UP:number = 1;
    public static SORT_DOWN:number = -1;


    getDevices(sortingMode:number): Promise<DeviceModel[]> {
        return this.http.get(this.devicesUrl)
            .toPromise()
            .then(
                response => {
                    let r = this.sortResponse(response.json().data as DeviceModel[],sortingMode);
                    return r;
                }
            )
            .catch(this.handleError);
    }

    getDevice(id: number): Promise<DeviceModel> {
        return this.getDevices(DeviceService.SORT_NONE)
            .then(devices => devices.find(device => device.id === id));
    }

    private sortResponse(devices:Array<DeviceModel>, sortingMode:number):Array<DeviceModel> {
        if (sortingMode == DeviceService.SORT_NONE) {
            return devices;
        }

        return devices.sort((d1:DeviceModel, d2:DeviceModel) => {
            return (d1.minPrice - d2.minPrice)*sortingMode;
        })

    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private headers = new Headers({'Content-Type': 'application/json'});


}
