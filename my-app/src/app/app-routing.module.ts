import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewPrepComponent } from './interview-prep/interview-prep.component';  // Adjust the path based on your component location

const routes: Routes = [
  { path: 'interview-prep', component: InterviewPrepComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }  // Optional: add a default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
