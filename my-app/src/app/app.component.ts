import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private logger: NGXLogger, private http: HttpClient) { }


  title = 'my-app';
  ngOnInit() {
    this.logger.info('AppComponent initialized');
    this.someMethod();
    this.callSampleGetApi();
  }

  someMethod() {
    this.logger.debug('Debugging info');
    this.logger.info('Useful information');
    this.logger.warn('Warning information');
    this.logger.error('Error encountered!');
  }
  callSampleGetApi() {
    this.http.get('http://localhost:8080/employees').subscribe(
      (response) => {
        this.logger.info('GET request successful', response);
      },
      (error) => {
        this.logger.error('GET request failed', error);
      }
    );
  }
}
