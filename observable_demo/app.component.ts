import { Component } from '@angular/core';
import { PingService } from './ping.service';
import { StreamService } from './stream.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private pingService: PingService, private streamService: StreamService) {
  }

  ngOnInit() {
    let sub = this.streamService.stream.subscribe(
      value => console.error(value)
    );
  }
  ngOnDestroy() {
    this.streamService.stream.unsubscribe() ;
  }
}
