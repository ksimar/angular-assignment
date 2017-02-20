import {Injectable} from "@angular/core";
import {Task} from "./task";
//import {document} from "@angular/platform-browser/src/facade/browser";

@Injectable()
export class AppService {


  //to be done when user clicks some button or enters after typing details
 /* tasks: Task[] = [{
    title: "assignment",
    description: "submit",
    priority: 0,
    date: new Date()
  },{
    title: "assignment2",
    description: "submit",
    priority: 1,
    date: new Date()
  }
  ];
  */
 tasks: Task[] = []
}







/*

 {
 title: (<HTMLInputElement>document.getElementById("task")).value ,
 description: (<HTMLInputElement>document.getElementById("description")).value ,
 priority: +((<HTMLInputElement>document.getElementById("priority")).value) ,
 date : new Date((<HTMLInputElement>document.getElementById("date")).value)
 },

var title = (<HTMLInputElement>document.getElementById("task")).value;
var description = (<HTMLInputElement>document.getElementById("description")).value;
var date = (<HTMLInputElement>document.getElementById("date")).value;
var priority = (<HTMLInputElement>document.getElementById("priority")).value;
*/
