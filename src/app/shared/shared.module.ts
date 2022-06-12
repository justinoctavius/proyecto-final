import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './components/navbar/navbar.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { FormsModule } from '@angular/forms';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { FilterDateButtonComponent } from './components/filter-date-button/filter-date-button.component';
import { FilterMountButtonComponent } from './components/filter-mount-button/filter-mount-button.component';

@NgModule({
  declarations: [
    NavbarComponent,
    IconButtonComponent,
    InputFieldComponent,
    FilterButtonComponent,
    FilterDateButtonComponent,
    FilterMountButtonComponent,
  ],
  imports: [BrowserModule, RouterModule, FormsModule, FontAwesomeModule],
  exports: [
    NavbarComponent,
    IconButtonComponent,
    InputFieldComponent,
    FilterButtonComponent,
    FilterDateButtonComponent,
    FilterMountButtonComponent,
  ],
})
export class SharedModule {}
