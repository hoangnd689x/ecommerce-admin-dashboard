import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
// import { ProductListComponent } from './product/product-list/product-list.component';
// import { AddProductComponent } from './product/add-product/add-product.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'category', component: CategoryListComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'product', component: ProductListComponent },
  // { path: 'product/add-product', component: AddProductComponent}
   { path: 'category', component: CategoryListComponent },
   { path: 'category/add-category', component: AddCategoryComponent},
   { path: 'category/update-category/:id', component: UpdateCategoryComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
