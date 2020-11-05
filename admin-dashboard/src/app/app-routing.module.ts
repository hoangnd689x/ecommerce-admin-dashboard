import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AddAccountComponent } from './account/add-account/add-account.component';
import { UpdateAccountComponent } from './account/update-account/update-account.component';

const routes: Routes = [
  { path: 'account', component: AccountListComponent },
  { path: 'account/add-account', component: AddAccountComponent},
  { path: 'account/change-password/:id', component: UpdateAccountComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
