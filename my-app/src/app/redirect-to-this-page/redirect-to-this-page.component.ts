import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-redirect-to-this-page',
  templateUrl: './redirect-to-this-page.component.html',
  styleUrls: ['./redirect-to-this-page.component.scss']
})
export class RedirectToThisPageComponent implements OnInit {
  parties: any[] = [];

  constructor(private route: ActivatedRoute) { }

  /*  ngOnInit(): void {
       this.route.queryParamMap.subscribe(params => {
         const rawData = params.get('data');
         if (rawData) {
           try {
             const decodedData = decodeURIComponent(rawData);
             this.parties = JSON.parse(decodedData);
           } catch (err) {
             console.error('Error decoding JSON:', err);
           }
         } else {
           console.warn('Query param "data" is null');
         }
       });
     } */

  ngOnInit(): void {
    debugger;
    const rawData = this.route.snapshot.queryParamMap.get('data');
    if (rawData) {
      try {
        const decoded = decodeURIComponent(rawData);
        this.parties = JSON.parse(decoded);
        console.log(this.parties);
      } catch (e) {
        console.error('JSON parsing error:', e);
      }
    } else {
      console.warn('No "data" found in query params');
    }
  }
}
