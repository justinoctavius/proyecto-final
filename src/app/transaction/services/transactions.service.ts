import { Injectable } from '@angular/core';
import { AddTransactionDto } from '../dtos/add-transaction.dto';
import { UpdateTransactionDto } from '../dtos/update-transaction.dto';
import {
  Transaction,
  TransactionType,
} from '../interfaces/transaction.interface';
import { TransactionsApiService } from './transactions-api.service';
import { SortByMountTypes } from '../interfaces/transaction-filter.interface';
import {
  SortByTypeTypes,
  SortByDateTypes,
} from '../interfaces/transaction-filter.interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  error: string = '';
  transactions: Transaction[] = [];
  updateTransactionDto: UpdateTransactionDto | null = null;

  //TODO: should be transactionsApiService
  constructor(private transactionApiService: TransactionsApiService) {}

  //TODO: should be getTransactions
  async getTransaction() {
    this.transactions = await this.transactionApiService.getTransactions();
  }

  async getTransactionsByType(type: SortByTypeTypes) {
    this.transactions = await this.transactionApiService.getTransactionsByType(
      type
    );
  }

  async addTransaction(addTransactionDto: AddTransactionDto) {
    try {
      await this.transactionApiService.addTransaction(addTransactionDto);
      await this.getTransaction();
    } catch (error: any) {
      this.error = error.error.message;
    }
  }

  //TODO: remove this useless code
  async updateTransaction() {
    try {
      if (this.updateTransactionDto) {
        await this.transactionApiService.updateTransaction(
          this.updateTransactionDto
        );
        await this.getTransaction();
      }
    } catch (error: any) {
      this.error = error.error.message;
    }
  }

  async removeTransaction(id: string) {
    try {
      await this.transactionApiService.removeTransaction(id);
      await this.getTransaction();
    } catch (error: any) {
      this.error = error.error.message;
    }
  }

  sortTransactionsByDate(sortType: SortByDateTypes) {
    this.transactions = this.transactions.sort((a, b) => {
      if (sortType === SortByDateTypes.DESC) {
        return a.date.getTime() - b.date.getTime();
      }
      return b.date.getTime() - a.date.getTime();
    });
  }

  sortTransactionsByMount(sortType: SortByMountTypes) {
    this.transactions = this.transactions.sort((a, b) => {
      if (sortType === SortByMountTypes.DESC) {
        return a.mount - b.mount;
      }

      return b.mount - a.mount;
    });
  }
}
