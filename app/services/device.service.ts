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

    getDevices(): Promise<DeviceModel[]> {
        return this.http.get(this.devicesUrl)
            .toPromise()
            .then(
                response => {
                    let r = response.json().data as DeviceModel[];
                    return r;
                }
            )
            .catch(this.handleError);
    }

    getDevice(id: number): Promise<DeviceModel> {
        return this.getDevices()
            .then(devices => devices.find(device => device.id === id));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private headers = new Headers({'Content-Type': 'application/json'});


}
