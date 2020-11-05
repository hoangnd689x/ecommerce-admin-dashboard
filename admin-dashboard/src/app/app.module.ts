import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule  } from '@angular/material';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule  } from '@angular/forms';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AddAccountComponent } from './account/add-account/add-account.component';
import { UpdateAccountComponent } from './account/update-account/update-account.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
