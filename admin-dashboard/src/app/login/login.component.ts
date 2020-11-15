import { Component, OnInit } from '@angular/core';
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

  constructor(private formBuilder: FormBuilder, private permissionManagerS: PermissionManagerService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
    });
  }

  onSubmit(){
    this.permissionManagerS.authAs(Role.ADMIN)
    console.log("Submit");
  }

}
