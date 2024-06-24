import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyInputDirective } from './currency-input.directive';

import { ReactiveFormsModule } from '@angular/forms';
import { SampleComponentComponent } from './sample-component/sample-component.component'; // Import ReactiveFormsModule

@NgModule({
  declarations: [
    AppComponent,
    CurrencyInputDirective,
    SampleComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
