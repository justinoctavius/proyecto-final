import { Injectable } from '@angular/core';
import {
  SortByDateTypes,
  SortByMountTypes,
} from '../interfaces/transaction-filter.interface';
import {
  Transaction,
  TransactionType,
} from '../interfaces/transaction.interface';
import { SortByTypeTypes } from '../interfaces/transaction-filter.interface';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  sortTransactionsByDate(
    sortType: SortByDateTypes,
    transactions: Transaction[]
  ) {
    return transactions.sort((a, b) => {
      if (sortType === SortByDateTypes.DESC) {
        return a.date.getTime() - b.date.getTime();
      }
      return b.date.getTime() - a.date.getTime();
    });
  }

  sortTransactionsByMount(
    sortType: SortByMountTypes,
    transactions: Transaction[]
  ) {
    return transactions.sort((a, b) => {
      if (sortType === SortByMountTypes.DESC) {
        return a.mount - b.mount;
      }

      return b.mount - a.mount;
    });
  }

  sortTransactionsByType(
    sortType: SortByTypeTypes,
    transactions: Transaction[]
  ) {
    switch (sortType) {
      case SortByTypeTypes.EXPENSIVE:
        return transactions.filter(
          (transaction) => transaction.type === TransactionType.EXPENSIVE
        );
      case SortByTypeTypes.INCOMES:
        return transactions.filter(
          (transaction) => transaction.type === TransactionType.INCOMES
        );
      default:
        return transactions;
    }
  }
}
