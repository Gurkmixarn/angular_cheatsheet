import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class StreamService {

  public stream: Observable;

  constructor() {

    let x = 0;
    this.stream = new Observable((observable) => {
      setInterval(() => {
        x++;
        observable.next(x);
      }, 1000);

      setTimeout(() => {
        observable.complete();
      }, 3000);
    });

  }

  getStream() {
    return this.stream;
  }

}
