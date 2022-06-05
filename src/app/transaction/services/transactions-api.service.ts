import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AddTransactionDto } from '../dtos/add-transaction.dto';
import { UpdateTransactionDto } from '../dtos/update-transaction.dto';

import {
  SortByTypeTypes,
  TransactionFilter,
} from '../interfaces/transaction-filter.interface';
import {
  Transaction,
  TransactionType,
} from '../interfaces/transaction.interface';

import {
  transactionsMock,
  categoriesMock,
} from '../constants/mock-data.constants';

@Injectable({
  providedIn: 'root',
})
export class TransactionsApiService {
  private transactions: Transaction[];

  constructor(private http: HttpClient) {
    this.transactions = transactionsMock;
  }

  async getTransactions() {
    return this.transactions;
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
  async updateTransaction(transaction: UpdateTransactionDto) {
    this.transactions.map((t) => {
      if (t.id === transaction.id) {
        return {
          ...t,
          date: new Date(),
          description: transaction.description || t.description,
          mount: transaction.mount || t.mount,
          type: transaction.type || t.type,
        };
      }
      return t;
    });
  }
  async removeTransaction(id: string) {
    this.transactions = this.transactions.filter(
      (transaction) => transaction.id !== id
    );
  }
  filterTransaction(filter: TransactionFilter) {}
}
