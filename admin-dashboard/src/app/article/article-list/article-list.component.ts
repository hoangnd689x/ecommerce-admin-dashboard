import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  displayedColumns: string[] = ['title', 'action'];
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

export interface Article {
  id: number;
  title: string;
  content: string;
}

const ELEMENT_DATA: Article[] = [
  { id: 1, title: 'How to play Yasuo', content: 'Sample tutorial'},
  { id: 2, title: 'How to carry team with Yasuo', content: 'Sample tutorial'},
  { id: 3, title: 'How to act like you are carring team although you are feeding with Yasuo', content: 'Sample tutorial'}
]
