import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { finalize, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sample title';
  data = '';
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.yourApiCall();
  }

  yourApiCall() {
    this.http.get('https://fakestoreapi.com/products/1')
      .subscribe((response: any) => {
        this.data = response;
      });
  }

}

