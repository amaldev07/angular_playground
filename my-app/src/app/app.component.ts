import { Component, OnInit } from '@angular/core';
import * as Tableau from 'tableau-api-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'my-app';

  public ngOnInit(): void {
    this.initViz();
  }
  public initViz(): void {
    const containerDiv = document.getElementById('vizContainer');
    const vizUrl = 'https://public.tableau.com/views/WorldIndicators/GDPpercapita';
    const options = {
      width: containerDiv && containerDiv.offsetWidth,
      height: 700
    };

    const viz = new Tableau.Viz(containerDiv, vizUrl, options);
  }
}
