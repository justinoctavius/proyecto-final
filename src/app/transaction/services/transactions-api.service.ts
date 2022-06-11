import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AddTransactionDto } from '../dtos/add-transaction.dto';

import { SortByTypeTypes } from '../interfaces/transaction-filter.interface';
import {
  Transaction,
  TransactionType,
} from '../interfaces/transaction.interface';

import {
  transactionsMock,
  categoriesMock,
} from '../constants/mock-data.constants';
import { config } from 'src/app/config';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsApiService {
  private transactions: Transaction[];

  constructor(private http: HttpClient) {
    this.transactions = transactionsMock;
  }

  async getTransactions() {
    const result = this.http.get<Transaction[]>(
      `${config.envs.api_url}${config.paths.transactions}`
    );
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
    const category = categoriesMock.find(
      (category) => category.id === transaction.category_id
    );
    if (!category) {
      throw 'category not found';
    }
    this.transactions.push({
      ...transaction,
      category,
      id: (this.transactions.length + 1).toString(),
    });
  }

  async removeTransaction(id: string) {
    this.transactions = this.transactions.filter(
      (transaction) => transaction.id !== id
    );
  }
}
