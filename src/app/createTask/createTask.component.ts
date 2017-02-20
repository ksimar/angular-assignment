import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {AppService} from "../app.service";
import {Task} from "../task";

@Component({
  selector: 'createTask',
  templateUrl: './app/createTask/createTask.component.html',
  styleUrls: ['']
})
export class CreateTaskComponent implements OnInit {

  index: number
  data: Task

  constructor(private router: Router, private route: ActivatedRoute,
              private service: AppService) {
  }

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
      this.index = +data.id
     // alert(JSON.stringify(data))
    });

  }

  sendRouteParams(index: number) {
    this.router.navigate(['details', index])
  }

  done() {
    let title = (<HTMLInputElement>document.getElementById("task")).value;
    let description = (<HTMLInputElement>document.getElementById("description")).value;
    let priority = +((<HTMLInputElement>document.getElementById("priority")).value);
    let date = new Date((<HTMLInputElement>document.getElementById("date")).value);
    //let title = #task.
    alert(title);
    let newTask: Task = new Task(title, date);
    newTask.priority = priority;
    newTask.description = description;
    this.service.tasks.push(newTask);
    alert("Your task has been added");
  }

}
