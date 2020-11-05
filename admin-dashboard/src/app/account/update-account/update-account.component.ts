import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router,
    private _location: Location) { }
  addForm: FormGroup;

  roles: Role[] = [
    {id: 1, roleName: 'Admin'},
    {id: 2, roleName: 'Super User'},
    {id: 3, roleName: 'User'}
  ];
  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
    });
  }

  goBack() {
    this._location.back();
  }

}
export interface Role {
  id: number;
  roleName: string;
}