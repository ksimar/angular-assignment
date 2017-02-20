import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ShowTaskComponent} from "./showTask/showTask.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {CreateTaskComponent} from "./createTask/createTask.component";
import {AppService} from "./app.service";
//import {DataTableModule} from "angular2-datatable";

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, ShowTaskComponent, CreateTaskComponent],
  bootstrap:    [ AppComponent ],
  providers: [AppService]
})
export class AppModule { }
