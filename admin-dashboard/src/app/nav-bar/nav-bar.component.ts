import { Component, OnInit } from '@angular/core';
import { PermissionManagerService } from '../Permission/PermissionManagerService';
import { Role } from '../Model/Permission/Role';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLogIn:Boolean
  
  constructor(private permissionManagerS: PermissionManagerService) { 
    this.isLogIn = false;
  }

  ngOnInit() {
    this.permissionManagerS.authAs(Role.UNKNOWN)
  }

}
