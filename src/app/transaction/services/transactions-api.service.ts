import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AddTransactionDto } from '../dtos/add-transaction.dto';

import { SortByTypeTypes } from '../interfaces/transaction-filter.interface';
import {
  Transaction,
  TransactionType,
} from '../interfaces/transaction.interface';

import { transactionsMock } from '../constants/mock-data.constants';
import { config } from 'src/app/config';
import { lastValueFrom } from 'rxjs';

const transaction_url = `${config.envs.api_url}${config.paths.transactions}`;

@Injectable({
  providedIn: 'root',
})
export class TransactionsApiService {
  private transactions: Transaction[];

  constructor(private http: HttpClient) {
    this.transactions = transactionsMock;
  }

  async getTransactions() {
    const result = this.http.get<Transaction[]>(transaction_url);
    return await lastValueFrom(result);
  }
  async getTransactionsByType(type: SortByTypeTypes) {
    switch (type) {
      case SortByTypeTypes.EXPENSIVE:
        return this.transactions.filter(
          (transaction) => transaction.type === TransactionType.EXPENSIVE
        );
      case SortByTypeTypes.INCOMES:
        return this.transactions.filter(
          (transaction) => transaction.type === TransactionType.INCOMES
        );
      default:
        return await this.getTransactions();
    }
  }
  async getOneTransaction(id: string) {
    return this.transactions.find((transaction) => transaction.id === id);
  }

  async addTransaction(transaction: AddTransactionDto) {
    const result = this.http.post(transaction_url, { ...transaction });
    return await lastValueFrom(result);
  }

  async removeTransaction(id: string) {
    this.transactions = this.transactions.filter(
      (transaction) => transaction.id !== id
    );
  }
}
