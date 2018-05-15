import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task, StatusType } from '../constants';

@Component({
  selector: 'task-list',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  taskList: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks(StatusType.NotStarted)
    .subscribe((list) => {
      this.taskList = list;
    });
  }
}
