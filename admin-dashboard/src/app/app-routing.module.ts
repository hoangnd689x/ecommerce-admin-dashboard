import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
// import { ProductListComponent } from './product/product-list/product-list.component';
// import { AddProductComponent } from './product/add-product/add-product.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'product/add-product', component: AddProductComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
