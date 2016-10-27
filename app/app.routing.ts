import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AccountCreateComponent} from "./views/account-create/account-create.component";
import {ServiceAddressComponent} from "./views/service-address/service-address.component";
import {DevicesComponent} from "./views/devices/devices.component";
import {DeviceDetailComponent} from "./views/device-detail/device-detail.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/devices',
        pathMatch: 'full'
    },
    {
        path: 'account',
        component: AccountCreateComponent
    },
    {
        path: 'address',
        component: ServiceAddressComponent
    },

    {
        path: 'devices',
        component: DevicesComponent
    },

    {
        path: 'detail/:id',
        component: DeviceDetailComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

