import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export class RegionCountry {
  constructor(public region: string, public country: string) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  regionCountries: RegionCountry[] = [
    { "region": "Asia", "country": "India" },
    { "region": "Asia", "country": "China" },
    { "region": "Asia", "country": "Japan" },
    { "region": "Asia", "country": "South Korea" },
    { "region": "Asia", "country": "Thailand" },
    { "region": "Asia", "country": "Vietnam" },
    { "region": "Asia", "country": "Indonesia" },

    { "region": "America", "country": "United States" },
    { "region": "America", "country": "Canada" },
    { "region": "America", "country": "Brazil" },
    { "region": "America", "country": "Mexico" },

    { "region": "Europe", "country": "United Kingdom" },
    { "region": "Europe", "country": "Germany" },
    { "region": "Europe", "country": "France" },
    { "region": "Europe", "country": "Italy" },

    { "region": "Africa", "country": "Nigeria" },
    { "region": "Africa", "country": "South Africa" },
    { "region": "Africa", "country": "Egypt" },
    { "region": "Africa", "country": "Kenya" }
  ];


  displayedColumns: string[] = ['region', 'country'];

  dataSource = new MatTableDataSource(this.regionCountries);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  shouldShowRegion(index: number): boolean {
    if (index === 0) return true;
    return this.regionCountries[index].region !== this.regionCountries[index - 1].region;
  }

  getRowSpan(index: number): number {
    const currentRegion = this.regionCountries[index].region;
    let rowSpan = 1;

    for (let i = index + 1; i < this.regionCountries.length; i++) {
      if (this.regionCountries[i].region === currentRegion) {
        rowSpan++;
      } else {
        break;
      }
    }

    return rowSpan;
  }
}
