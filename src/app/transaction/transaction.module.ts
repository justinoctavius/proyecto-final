import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../shared/shared.module';

import { TransactionCardComponent } from './components/transaction-card/transaction-card.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionsPageComponent } from './pages/transactions-page/transactions-page.component';
import { TransactionsStatusComponent } from './components/transactions-status/transactions-status.component';
import { AddTransactionPageComponent } from './pages/add-transaction-page/add-transaction-page.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { TransactionTypeComponent } from './components/transaction-type/transaction-type.component';
import { TransactionFilterComponent } from './components/transaction-filter/transaction-filter.component';

@NgModule({
  declarations: [
    TransactionCardComponent,
    TransactionListComponent,
    TransactionsStatusComponent,
    TransactionTypeComponent,
    TransactionFilterComponent,
    CategoryComponent,
    CategoryListComponent,
    TransactionsPageComponent,
    AddTransactionPageComponent,
  ],
  imports: [BrowserModule, RouterModule, FontAwesomeModule, SharedModule],
  exports: [TransactionsPageComponent, AddTransactionPageComponent],
})
export class TransactionModule {}
