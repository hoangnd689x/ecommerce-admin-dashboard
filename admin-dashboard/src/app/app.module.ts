import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule  } from '@angular/material';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
// import { ProductListComponent } from './product/product-list/product-list.component';
// import { AddProductComponent } from './product/add-product/add-product.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NewOrdersComponent } from './dashboard/new-orders/new-orders.component';
import { PermissionManagerService } from './Permission/PermissionManagerService';
import { IsGrantedDirective } from './Permission/is-granted.directive';
import { LoginComponent } from './login/login.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { AddAccountComponent } from './account/add-account/add-account.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { UpdateAccountComponent } from './account/update-account/update-account.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    NewOrdersComponent,
    IsGrantedDirective,
    LoginComponent,
    UpdateCategoryComponent,
    DashboardComponent,
    CategoryListComponent,
    AddCategoryComponent,
    AccountListComponent,
    AddAccountComponent,
    UpdateAccountComponent
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
  providers: [PermissionManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
