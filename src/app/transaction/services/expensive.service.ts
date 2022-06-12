import { Injectable } from '@angular/core';
import { SortByTypeTypes } from '../interfaces/transaction-filter.interface';
import { Transaction } from '../interfaces/transaction.interface';
import { TransactionsApiService } from './transactions-api.service';

@Injectable({
  providedIn: 'root',
})
export class ExpensiveService {
  error: string = '';
  transactions: Transaction[] = [];
  constructor(private transactionsApiService: TransactionsApiService) {}

  async getTransactions() {
    this.transactions =
      await this.transactionsApiService.getTransactionByFilter({
        type: SortByTypeTypes.EXPENSIVE,
      });
  }

  async removeTransaction(id: string) {
    try {
      await this.transactionsApiService.removeTransaction(id);
      await this.getTransactions();
    } catch (error: any) {
      this.error = error.error.message;
    }
  }
}
