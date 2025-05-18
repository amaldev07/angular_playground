import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterviewPrepComponent } from './interview-prep/interview-prep.component';
import { HomeComponent } from './home/home.component';
import { PdfcanvasdownloadComponent } from './pdfcanvasdownload/pdfcanvasdownload.component';

@NgModule({
  declarations: [
    AppComponent,
    InterviewPrepComponent,
    HomeComponent,
    PdfcanvasdownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
