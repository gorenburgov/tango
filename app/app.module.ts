import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import {ServiceAddressComponent} from "./views/service-address/service-address.component";
import {AccountCreateComponent} from "./views/account-create/account-create.component";
import {routing} from "./app.routing";
import {SignUpService} from "./services/SignUpService";
import {DeviceService} from "./services/device.service";
import {InMemoryDataService} from "./services/in-memory-data.service";
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {DevicesComponent} from "./views/devices/devices.component";
import {HttpModule} from "@angular/http";
import {DeviceDetailComponent} from "./views/device-detail/device-detail.component";
@NgModule({
    imports:      [ BrowserModule, FormsModule, routing, InMemoryWebApiModule.forRoot(InMemoryDataService), HttpModule],
    declarations: [ AppComponent, ServiceAddressComponent, AccountCreateComponent, DevicesComponent, DeviceDetailComponent],
    bootstrap:    [ AppComponent ],
    providers: [
        SignUpService, DeviceService
    ],
})
export class AppModule { }
