import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data: { user: any; orders: any } | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    forkJoin({
      user: this.apiService.getUserDetails(),
      orders: this.apiService.getUserOrders(),
    }).subscribe({
      next: (result) => {
        debugger;
        this.data = result; // Combine results
        console.log('Combined Result:', result);
      },
      error: (error) => {
        debugger;
        console.error('Error:', error)
      },
    });
  }
}