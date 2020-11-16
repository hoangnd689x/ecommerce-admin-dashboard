import { Component, Inject, OnInit } from '@angular/core';
import { PermissionManagerService } from '../Permission/PermissionManagerService';
import { Role } from '../Model/Permission/Role';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  constructor(private permissionManagerS: PermissionManagerService, private router: Router, @Inject(DOCUMENT) private _document: Document) { 
    switch (localStorage.getItem('role')) {
      case Role.ADMIN:
        this.router.navigate(['dashboard']); break;
      case Role.SUPERUSER:
        this.router.navigate(['category']); break;
      default :
        this.router.navigate(['']); break;
    }
  }

  ngOnInit() {
  }

  logout(){
    localStorage.setItem('role', 'unknown');
    this._document.defaultView.location.reload();
  }

}
