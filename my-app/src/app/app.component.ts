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
  constructor(private http: HttpClient) { }
  ngOnInit() {

    this.yourApiCall();
  }

  yourApiCall() {
    this.http.get('https://fakestosreapi.com/products/1')
      .pipe(
        catchError((error: any) => {
          alert('error');
          return of(null); // Emitting null to proceed to finalize
        }),
        finalize(() => {
          alert('final');
        })
      )
      .subscribe((response: any) => {
        if (response !== null) {
          alert('success');
        }
      });
  }

}

