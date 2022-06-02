import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';

import { TransactionCardComponent } from './components/transaction-card/transaction-card.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionsPageComponent } from './pages/transactions-page/transactions-page.component';
import { TransactionsStatusComponent } from './components/transactions-status/transactions-status.component';

@NgModule({
  declarations: [
    TransactionCardComponent,
    TransactionListComponent,
    TransactionsStatusComponent,
    TransactionsPageComponent,
  ],
  imports: [BrowserModule, RouterModule, FontAwesomeModule, SharedModule],
  exports: [TransactionsPageComponent],
})
export class TransactionModule {}
