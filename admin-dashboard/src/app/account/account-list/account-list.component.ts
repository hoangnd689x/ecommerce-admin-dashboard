import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  displayedColumns: string[] = ['userName', 'email', 'role', 'action'];
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

export interface Account {
  id: number;
  userName: string;
  email: string;
  role: string;
}

const ELEMENT_DATA: Account[] = [
  { id: 1, userName: 'Sample Account 1', email: 'sample@gmail.com', role: "Admin" },
  { id: 2, userName: 'Sample Account 2', email: 'sample@gmail.com', role: "Super User" },
  { id: 3, userName: 'Sample Account 3', email: 'sample@gmail.com', role: "User" }
]