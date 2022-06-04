import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  Transaction,
  TransactionIconType,
} from '../../interfaces/transaction.interface';
import { CategoryService } from '../../services/category.service';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
})
export class TransactionListComponent {
  selectedId: string = '';
  @Input() transactions: Transaction[] = [];
  @Output() onTransactionPress: EventEmitter<Transaction> = new EventEmitter();

  constructor(
    private categoryService: CategoryService,
    private transactionsService: TransactionsService
  ) {}

  getCategoryIcon(type: TransactionIconType) {
    return this.categoryService.getCategoryIcon(type);
  }

  handleOnTransactionPress(event: Transaction) {
    this.onTransactionPress.emit(event);
  }

  async onRemoveClick(id: string) {
    await this.transactionsService.removeTransaction(id);
  }

  handleCheckUncheck(id: string) {
    if (this.selectedId != id) {
      this.selectedId = id;
    } else {
      this.selectedId = '';
    }
  }
}
