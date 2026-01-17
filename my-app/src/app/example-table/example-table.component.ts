import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

interface TableRow {
  id: number;
  name: string;
  isActive: number; // 1 or 0
  status: 'P' | 'C' | 'F';
}

@Component({
  selector: 'app-example-table',
  templateUrl: './example-table.component.html',
})
export class ExampleTableComponent implements OnInit {

  displayedColumns: string[] = ['select', 'id', 'name', 'isActive', 'status'];
  dataSource = new MatTableDataSource<TableRow>();

  selection = new SelectionModel<TableRow>(true, []);

  isActiveFilter: string = '';
  nameFilter: string = '';
  uniqueNames: string[] = [];

  ngOnInit(): void {
    this.getData();
    this.setupFilterPredicate();
    this.applyFilters();
  }

  setupFilterPredicate(): void {
    this.dataSource.filterPredicate = (data, filter) => {
      const filters = JSON.parse(filter);

      const matchStatus =
        data.status.toString() === 'P';

      const matchIsActive =
        !filters.isActive || data.isActive.toString() === filters.isActive;

      const matchName =
        !filters.name || data.name === filters.name;

      return matchStatus && matchIsActive && matchName;
    };
  }

  applyFilters(): void {
    const filterValue = {
      isActive: this.isActiveFilter,
      name: this.nameFilter
    };

    this.dataSource.filter = JSON.stringify(filterValue);
  }


  getData(): void {
    const data: TableRow[] = [
      { id: 1, name: 'Order A', isActive: 1, status: 'P' },
      { id: 2, name: 'Order B', isActive: 0, status: 'C' },
      { id: 3, name: 'Order C', isActive: 1, status: 'F' },

      { id: 4, name: 'Order A', isActive: 0, status: 'P' },
      { id: 5, name: 'Order B', isActive: 1, status: 'F' },
      { id: 6, name: 'Order C', isActive: 0, status: 'C' },

      { id: 7, name: 'Order A', isActive: 1, status: 'C' },
      { id: 8, name: 'Order B', isActive: 1, status: 'P' },
      { id: 9, name: 'Order C', isActive: 0, status: 'F' },

      { id: 10, name: 'Order A', isActive: 1, status: 'P' },
      { id: 11, name: 'Order B', isActive: 0, status: 'C' },
      { id: 12, name: 'Order C', isActive: 1, status: 'F' },

      { id: 13, name: 'Order A', isActive: 0, status: 'C' },
      { id: 14, name: 'Order B', isActive: 1, status: 'P' },
      { id: 15, name: 'Order C', isActive: 0, status: 'F' },
    ];

    this.dataSource.data = data;
    this.uniqueNames = [...new Set(data.map(item => item.name))];
    debugger;

  }


  /** Toggle selection for a row */
  toggleRow(row: TableRow): void {
    this.selection.toggle(row);
  }

  /** Check if row is selected */
  isSelected(row: TableRow): boolean {
    return this.selection.isSelected(row);
  }

  clearFilters() {
    this.isActiveFilter = '';
    this.nameFilter = '';
    this.applyFilters()
  }
}
