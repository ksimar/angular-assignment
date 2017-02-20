import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AppService} from "../app.service";
import {Task} from "../task"

@Component({
  selector: 'showTask',
  templateUrl: './app/showTask/showTask.component.html',
  styleUrls: ['']
})
export class ShowTaskComponent implements OnInit{

  data: Task[];
  constructor(private router: Router, private service: AppService) {}

  ngOnInit() {
    this.data = this.service.tasks
  }

  goToEdit(index: number) {

    this.router.navigate(['details',this.data[index]])
  }

  done() {
    alert("done")
  }
}
