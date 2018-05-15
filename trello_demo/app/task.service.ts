import { BehaviorSubject } from 'rxjs';
import { Observable } from "rxjs/Observable";
import { Task, StatusType } from './constants';

export class TaskService {

  taskList: Task[];
  stream: Observable<Task[]>;

  constructor() {
    // FIXME - mockdata remove later.
    const mockData = [
      {
        id: 1,
        status: StatusType.NotStarted,
        title: 'Mock title',
        description: 'Mock description',
      }
    ];
    this.taskList = mockData;
  }

  // add class properties for:
  //
  // a task id counter
  // an internal array of Task objects
  // an instance of BehaviorSubject

  getTasks(status: StatusType): Observable<Task[]> {
    // return an observable of a task array, filtered by the passed in status...
    return new Observable((observer) => {
      observer.next(this.taskList);
    });
  }

  updateTask(id: number, status: StatusType) {
    // complete the code to update a task's status...
  }

  addTask(title: string, description: string) {
  }
}
