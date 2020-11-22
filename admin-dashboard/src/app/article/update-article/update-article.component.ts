import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router,
    private _location: Location) { }

    updateForm: FormGroup;

    ngOnInit() {
      this.updateForm = this.formBuilder.group({
        id: [''],
        title: [''],
        content: [''],
      });
    }

  goBack() {
    this._location.back();
  }
}
