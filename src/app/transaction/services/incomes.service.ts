import { Injectable } from '@angular/core';
import { TransactionsApiService } from './transactions-api.service';
import { Transaction } from '../interfaces/transaction.interface';
import { SortByTypeTypes } from '../interfaces/transaction-filter.interface';

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
        type: SortByTypeTypes.INCOMES,
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

  async getTransactionByDate(date: Date) {
    try {
      this.transactions =
        await this.transactionsApiService.getTransactionByFilter({
          date,
          type: SortByTypeTypes.INCOMES,
        });
    } catch (error: any) {
      this.error = error.error.message;
    }
  }

  async getTransactionByMount(mount: number) {
    try {
      this.transactions =
        await this.transactionsApiService.getTransactionByFilter({
          mount,
          type: SortByTypeTypes.INCOMES,
        });
    } catch (error: any) {
      this.error = error.error.message;
    }
  }
}
