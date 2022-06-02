import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './components/navbar/navbar.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [NavbarComponent, IconButtonComponent, CategoryComponent],
  imports: [BrowserModule, RouterModule, FontAwesomeModule],
  exports: [NavbarComponent, IconButtonComponent, CategoryComponent],
})
export class SharedModule {}
