import { Component } from '@angular/core';
import { Role } from './Model/Permission/Role';
import { OnInit } from '@angular/core';
import { PermissionManagerService } from './Permission/PermissionManagerService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-dashboard';

  constructor(private permissionManagerS: PermissionManagerService) { 
  }

  ngOnInit() {
    
  }
}
