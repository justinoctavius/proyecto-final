import { Injectable } from '@angular/core';
import { TransactionFilter } from '../interfaces/transaction-filter.interface';
import {
  Transaction,
  TransactionType,
} from '../interfaces/transaction.interface';
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
        type: TransactionType.EXPENSIVE,
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

  async getTransactionsByFilter(filters: TransactionFilter) {
    this.transactions =
      await this.transactionsApiService.getTransactionByFilter({
        ...filters,
        type: TransactionType.EXPENSIVE,
      });
  }
}
