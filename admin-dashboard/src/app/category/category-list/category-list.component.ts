import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  displayedColumns: string[] = ['image', 'name', 'description', 'action'];
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

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}

const ELEMENT_DATA: Category[] = [
  { id: 1, name: 'Sample Category 1', description: 'Sample Desciption', image: "https://icon-library.com/images/icon-placeholder/icon-placeholder-17.jpg" },
  { id: 2, name: 'Sample Category 2', description: 'Sample Desciption', image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" },
  { id: 3, name: 'Sample Category 3', description: 'Sample Desciption', image: "https://image.flaticon.com/icons/png/512/125/125783.png" }
]