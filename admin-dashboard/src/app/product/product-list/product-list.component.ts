import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort} from '@angular/material';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'stock', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface PeriodicElement {
  name: string;
  description: string;
  stock: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Monitor', description: 'HP Monitor', stock: 100},
  {name: 'Keyboard', description: 'HP Keyboard', stock: 55},
  {name: 'Mouse', description: 'HP Mouse', stock: 63},
  {name: 'Speaker', description: 'HP Speaker', stock: 89},
  {name: 'Monitor', description: 'HP Monitor', stock: 100},
  {name: 'Keyboard', description: 'HP Keyboard', stock: 55},
  {name: 'Mouse', description: 'HP Mouse', stock: 63},
  {name: 'Speaker', description: 'HP Speaker', stock: 89},
  {name: 'Monitor', description: 'HP Monitor', stock: 100},
  {name: 'Keyboard', description: 'HP Keyboard', stock: 55},
  {name: 'Mouse', description: 'HP Mouse', stock: 63},
  {name: 'Speaker', description: 'HP Speaker', stock: 89},
  {name: 'Monitor', description: 'HP Monitor', stock: 100},
  {name: 'Keyboard', description: 'HP Keyboard', stock: 55},
  {name: 'Mouse', description: 'HP Mouse', stock: 63},
  {name: 'Speaker', description: 'HP Speaker', stock: 89},
  {name: 'Monitor', description: 'HP Monitor', stock: 100},
  {name: 'Keyboard', description: 'HP Keyboard', stock: 55},
  {name: 'Mouse', description: 'HP Mouse', stock: 63},
  {name: 'Speaker', description: 'HP Speaker', stock: 89},
  {name: 'Monitor', description: 'HP Monitor', stock: 100},
  {name: 'Keyboard', description: 'HP Keyboard', stock: 55},
  {name: 'Mouse', description: 'HP Mouse', stock: 63},
  {name: 'Speaker', description: 'HP Speaker', stock: 89},
];
