import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {Task} from "./task";

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
 // providers: [AppService]
})
export class AppComponent implements OnInit {

  userTasks: Task[];

  constructor(private service: AppService) {}

  ngOnInit() {
    this.userTasks = this.service.tasks;
  }

}
