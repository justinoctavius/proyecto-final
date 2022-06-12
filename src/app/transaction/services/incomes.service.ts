import { Injectable } from '@angular/core';
import { TransactionsApiService } from './transactions-api.service';
import {
  Transaction,
  TransactionType,
} from '../interfaces/transaction.interface';
import { TransactionFilter } from '../interfaces/transaction-filter.interface';

@Injectable({
  providedIn: 'root',
})
export class IncomesService {
  error: string = '';
  transactions: Transaction[] = [];
  constructor(private transactionsApiService: TransactionsApiService) {}

  async getTransactions() {
    this.transactions =
      await this.transactionsApiService.getTransactionByFilter({
        type: TransactionType.INCOMES,
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

  async getTransactionsByFilter(filter: TransactionFilter) {
    try {
      this.transactions =
        await this.transactionsApiService.getTransactionByFilter({
          ...filter,
          type: TransactionType.INCOMES,
        });
    } catch (error: any) {
      this.error = error.error.message;
    }
  }
}
