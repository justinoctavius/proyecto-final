import { Injectable } from '@angular/core';
import { AddTransactionDto } from '../dtos/add-transaction.dto';
import { Transaction } from '../interfaces/transaction.interface';
import { TransactionsApiService } from './transactions-api.service';
import { SortByTypeTypes } from '../interfaces/transaction-filter.interface';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  error: string = '';
  transactions: Transaction[] = [];

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

  async getTransactionsByDate(date: Date) {
    this.transactions = await this.transactionApiService.getTransactionByDate(
      date
    );
  }

  async getTransactionsByMount(mount: number) {
    this.transactions = await this.transactionApiService.getTransactionByMount(
      mount
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

  async removeTransaction(id: string) {
    try {
      await this.transactionApiService.removeTransaction(id);
      await this.getTransaction();
    } catch (error: any) {
      this.error = error.error.message;
    }
  }
}
