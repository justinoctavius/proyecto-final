import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  Transaction,
  TransactionIconType,
} from '../../interfaces/transaction.interface';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
})
export class TransactionListComponent {
  @Input() transactions: Transaction[] = [];
  @Output() onTransactionPress: EventEmitter<Transaction> = new EventEmitter();

  constructor(private categoryService: CategoryService) {}

  getCategoryIcon(type: TransactionIconType) {
    return this.categoryService.getCategoryIcon(type);
  }

  handleOnTransactionPress(event: Transaction) {
    this.onTransactionPress.emit(event);
  }
}
