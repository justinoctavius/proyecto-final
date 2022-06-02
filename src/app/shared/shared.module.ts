import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NavbarComponent, IconButtonComponent],
  imports: [RouterModule, FontAwesomeModule],
  exports: [NavbarComponent, IconButtonComponent],
})
export class SharedModule {}
