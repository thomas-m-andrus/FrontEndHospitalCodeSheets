import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//remember to remove!!!!!
import { TestingModule } from "app/testing/testing.module";
//Module Imports
import { HttpModule } from "@angular/http";
import { routing } from "app/app.routing";
import { HomeOutletsModule } from "app/home-outlets/home-outlets.module";
//Service Imports
import { HttpService } from "app/shared-services/http.service";
import { DrugService } from "app/shared-services/drug.service";
import { PatientService } from "app/shared-services/patient.service";
import { RouteConverterService } from "app/shared-services/route-converter.service";
//Component Imports
import { HomeComponent } from './home/home.component';
import { RedirectComponent } from "app/home/redirect.component";
import { NavBarComponent } from './nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent
    ,HomeComponent
    ,RedirectComponent
    ,NavBarComponent
  ],
  imports: [
    BrowserModule
    ,HttpModule
    //remove the following at the end
    ,HomeOutletsModule
    ,TestingModule
    ,routing
  ],
  providers: [
    HttpService
    ,DrugService
    ,PatientService
    ,RouteConverterService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
