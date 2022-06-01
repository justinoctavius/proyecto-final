import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TransactionCardComponent } from './components/transaction-card/transaction-card.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionsPageComponent } from './pages/transactions-page/transactions-page.component';

@NgModule({
  declarations: [
    TransactionCardComponent,
    TransactionListComponent,
    TransactionsPageComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule],
  exports: [TransactionsPageComponent],
})
export class TransactionModule {}
