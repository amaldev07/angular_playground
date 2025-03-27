import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG, // or INFO, ERROR as needed
      serverLogLevel: NgxLoggerLevel.ERROR, // Level for sending logs to server
      serverLoggingUrl: 'http://localhost:8080/api/logs' // Endpoint to your backend
    }),
    BrowserModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
