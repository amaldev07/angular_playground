import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

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

  displayedColumns: string[] = ['id', 'name', 'isActive', 'status'];
  dataSource = new MatTableDataSource<TableRow>();

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const data: TableRow[] = [
      { id: 1, name: 'Order A', isActive: 1, status: 'P' },
      { id: 2, name: 'Order B', isActive: 0, status: 'C' },
      { id: 3, name: 'Order C', isActive: 1, status: 'F' },
      { id: 4, name: 'Order D', isActive: 0, status: 'P' }
    ];

    this.dataSource.data = data;
  }
}
