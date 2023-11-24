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
  /* 
    chat gpt chat for this solution
    https://chat.openai.com/share/a232e4c4-c8e8-4a1f-9826-2506855326ac 
  */
  constructor(private http: HttpClient) { }
  ngOnInit() {
    /* this.getProducts().subscribe({
      next: (data) => {
        alert("success");
      }, error: (err) => {
        alert("error");
      },
      complete: () => {
        alert('Complete');
      }
    }) */
    this.yourApiCall();
  }
  /*  yourApiCall() {
     this.http.get('https://fakestoreapi.com/products /1')
       .pipe(
         finalize(() => {
           alert('Complete');
         })
       )
       .subscribe(
         (response: any) => {
           alert("Success");
         },
         (error: any) => {
           alert("error");
         }
       );
   }
   */


  yourApiCall() {
    this.http.get('your_api_url')
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

