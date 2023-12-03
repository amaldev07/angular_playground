import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sample title';
  data = '';
  input = '';
  count = 0;
  private searchTerms = new Subject<string>();
  ngOnInit(): void {

  }
  constructor(private http: HttpClient) {
    this.searchTerms.pipe(
      // if input has more than 3 chars then only perform api call action
      filter(x => x.length > 3),
      // Add a delay of 300ms between calls
      debounceTime(300),
      // Ignore if the next term is the same as the previous one
      distinctUntilChanged(),
      /* Switch to a new observable each time the term changes, 
      if htere is an exisitng api call present it will cancel the existing api call */
      switchMap((term: string) => this.searchApiCall(term))
    ).subscribe((result) => {
      // Handle the API call result here
      console.log(result);
    });
  }

  
  


  // Function to push search terms into the subject
  search(term: any): void {
    const val = term.target.value;
    this.searchTerms.next(val);
  }

  // API call function
  searchApiCall(term: string): Observable<any> {
    const apiUrl = `https://fakestoreapi.com/products/1`;
    return this.http.get(apiUrl);
  }

  /*  yourApiCall() {
     this.http.get('https://fakestoreapi.com/products/1')
       .subscribe((response: any) => {
         this.data = response;
       });
   } */

}

