import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule  } from '@angular/material';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './product/product-list/product-list.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductListComponent,
    AddProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
