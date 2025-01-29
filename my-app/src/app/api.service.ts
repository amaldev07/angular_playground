import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private userApi = 'https://jsonplaceholder.typicode.com/users/1';
  private ordersApi = 'https://jsonplaceholder.typicode.com/users/2';

  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<any> {
    return this.http.get(this.userApi);
  }

  getUserOrders(): Observable<any> {
    return this.http.get(this.ordersApi);
  }
}
