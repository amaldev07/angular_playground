import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterviewPrepComponent } from './interview-prep/interview-prep.component';
import { HomeComponent } from './home/home.component';
import { PdfcanvasdownloadComponent } from './pdfcanvasdownload/pdfcanvasdownload.component';
import { RedirectToThisPageComponent } from './redirect-to-this-page/redirect-to-this-page.component';
import { ExampleTableComponent } from './example-table/example-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    InterviewPrepComponent,
    HomeComponent,
    PdfcanvasdownloadComponent,
    RedirectToThisPageComponent,
    ExampleTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
