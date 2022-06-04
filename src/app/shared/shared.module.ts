import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './components/navbar/navbar.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { CategoryComponent } from './components/category/category.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    IconButtonComponent,
    CategoryComponent,
    InputFieldComponent,
  ],
  imports: [BrowserModule, RouterModule, FormsModule, FontAwesomeModule],
  exports: [
    NavbarComponent,
    IconButtonComponent,
    CategoryComponent,
    InputFieldComponent,
  ],
})
export class SharedModule {}
