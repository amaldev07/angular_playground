import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable'; // ✅ Import autoTable

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  // Sample data
  data = [
    { region: "Asia", country: "India", population: "1.4B" },
    { region: "Asia", country: "China", population: "1.4B" },
    { region: "Asia", country: "Japan", population: "126M" },
    { region: "Europe", country: "Germany", population: "83M" },
    { region: "Europe", country: "France", population: "67M" }
  ];

  downloadPDF() {
    const doc = new jsPDF();
    
    // Table headers
    const headers = [["Region", "Country", "Population"]];

    // Convert data to table rows
    const rows = this.data.map(item => [item.region, item.country, item.population]);

    // ✅ Call autoTable correctly
    autoTable(doc, { head: headers, body: rows });

    // Save PDF
    doc.save("data.pdf");
  }
}