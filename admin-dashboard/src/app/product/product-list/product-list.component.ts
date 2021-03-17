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
  id: number;
  name: string;
  description: string;
  stock: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Monitor', description: 'HP Monitor', stock: 100},
  {id: 2, name: 'Keyboard', description: 'HP Keyboard', stock: 55},
  {id: 3, name: 'Mouse', description: 'HP Mouse', stock: 63},
  {id: 4, name: 'Speaker', description: 'HP Speaker', stock: 89},
  {id: 5, name: 'Monitor', description: 'HP Monitor', stock: 100},
  {id: 6, name: 'Keyboard', description: 'HP Keyboard', stock: 55},
  {id: 7, name: 'Mouse', description: 'HP Mouse', stock: 63},
  {id: 8, name: 'Speaker', description: 'HP Speaker', stock: 89},
  {id: 9, name: 'Monitor', description: 'HP Monitor', stock: 100},
  {id: 10, name: 'Keyboard', description: 'HP Keyboard', stock: 55},
  {id: 11, name: 'Mouse', description: 'HP Mouse', stock: 63},
  {id: 12, name: 'Speaker', description: 'HP Speaker', stock: 89},
  {id: 13, name: 'Monitor', description: 'HP Monitor', stock: 100},
  {id: 14, name: 'Keyboard', description: 'HP Keyboard', stock: 55},
  {id: 15, name: 'Mouse', description: 'HP Mouse', stock: 63},
  {id: 16, name: 'Speaker', description: 'HP Speaker', stock: 89},
  {id: 17, name: 'Monitor', description: 'HP Monitor', stock: 100},
  {id: 18, name: 'Keyboard', description: 'HP Keyboard', stock: 55},
  {id: 19, name: 'Mouse', description: 'HP Mouse', stock: 63},
  {id: 20, name: 'Speaker', description: 'HP Speaker', stock: 89},
  {id: 21, name: 'Monitor', description: 'HP Monitor', stock: 100},
  {id: 22, name: 'Keyboard', description: 'HP Keyboard', stock: 55},
  {id: 23, name: 'Mouse', description: 'HP Mouse', stock: 63},
  {id: 24, name: 'Speaker', description: 'HP Speaker', stock: 89},
];
