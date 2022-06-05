import { Injectable, Input } from '@angular/core';
import { TransactionsService } from './transactions.service';
import { GraphicItem } from '../interfaces/graphic.interface';
import { SortByTypeTypes } from '../interfaces/transaction-filter.interface';
import { Transaction } from '../interfaces/transaction.interface';

@Injectable({
  providedIn: 'root',
})
export class GraphicService {
  graphicItems: GraphicItem[] = [];
  colors: string[] = [];
  constructor(private transactionsService: TransactionsService) {}

  isGraphicItemAlreadyExists(graphicItem: GraphicItem) {
    return this.graphicItems.findIndex(
      (item) => item.name === graphicItem.name
    );
  }

  addGraphicItem(newItem: GraphicItem) {
    const indexOfItem = this.isGraphicItemAlreadyExists(newItem);
    if (indexOfItem > -1) {
      const item = this.graphicItems[indexOfItem];
      this.graphicItems[indexOfItem] = {
        ...item,
        value: item.value + newItem.value,
      };
    } else {
      this.graphicItems.push(newItem);
    }
  }

  addColor(color: string) {
    if (!this.colors.includes(color)) {
      this.colors.push(color);
    }
  }

  addTransactionToGraphicItems(transaction: Transaction) {
    const newItem: GraphicItem = {
      value: transaction.mount,
      name: transaction.category.name,
    };
    this.addGraphicItem(newItem);
    this.addColor(transaction.category.color);
  }

  mapTransactionToGraphicItem() {
    this.transactionsService.transactions.map((transaction) => {
      this.addTransactionToGraphicItems(transaction);
    });
  }

  async getGraphicItems(transactionType: SortByTypeTypes) {
    this.graphicItems = [];
    await this.transactionsService.getTransactionsByType(transactionType);
    this.mapTransactionToGraphicItem();
  }
}
