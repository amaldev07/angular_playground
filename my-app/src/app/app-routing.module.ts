import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewPrepComponent } from './interview-prep/interview-prep.component';  // Adjust the path based on your component location
import { HomeComponent } from './home/home.component'; // Import the HomeComponent
import { PdfcanvasdownloadComponent } from './pdfcanvasdownload/pdfcanvasdownload.component';

const routes: Routes = [
  { path: 'interview-prep', component: InterviewPrepComponent },
  { path: 'home', component: HomeComponent }, // Add route for HomeComponent
  { path: 'pdf-cancvas-donload', component: PdfcanvasdownloadComponent }, // Add route for HomeComponent
  { path: '', redirectTo: '/home', pathMatch: 'full' }  // Optional: add a default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
