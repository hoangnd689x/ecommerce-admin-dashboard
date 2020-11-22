import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Role } from '../Model/Permission/Role';
import { PermissionManagerService } from '../Permission/PermissionManagerService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private permissionManagerS: PermissionManagerService, private router: Router, @Inject(DOCUMENT) private _document: Document) { 
    console.log(sessionStorage.getItem('role'))
    switch (sessionStorage.getItem('role')) {
      case Role.ADMIN:
        this.router.navigate(['dashboard']); break;
      case Role.SUPERUSER:
        this.router.navigate(['category']); break;
      default :
        this.router.navigate(['']); break;
    }
  }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: [''],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.permissionManagerS.authAs(Role.ADMIN)
    this.refresh();
  }

  refresh() {
    this._document.defaultView.location.reload();
  }

}
