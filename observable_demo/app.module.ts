import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { PingService } from './ping.service';
import { StreamService } from './stream.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PingService, StreamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
