import { Component, OnInit }      from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {DeviceService} from "../../services/device.service";
import {DeviceModel} from "../../models/device.model";


@Component({
    moduleId: module.id,
    selector: 'my-device-detail',
    templateUrl: 'device-detail.component.html',
})

/**
 *Show device details  component
 */


export class DeviceDetailComponent implements OnInit {
    device:DeviceModel;
    networkList:string;

    constructor(
        private deviceService: DeviceService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.deviceService.getDevice(id)
                .then(
                    device  => {
                        this.device = device as DeviceModel;
                        this.networkList = DeviceModel.getNetworkList(device).join(',')
                    }
                );
        });
    }

    createAccount():void
    {
        this.router.navigate(['/account']);
    }

}
