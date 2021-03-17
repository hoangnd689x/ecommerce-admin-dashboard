import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  addForm: FormGroup;
  public imagePath = "Choose file";
  imgURL: any = "https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png";
  public message: string;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private _location: Location) { }

  categories = [
    {id: 1, name: 'Funiture'},
    {id: 2, name: 'Electrical'},
    {id: 3, name: 'Others'}
  ];

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
    });

  }

  onSubmit() {
    console.log(this.addForm.value);

  }

  goBack() {
    this._location.back();
  }

  preview(files) {
    if (files.length === 0)
      return;
 
    var type = files[0].type;
    if (type.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files[0].name;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

}
