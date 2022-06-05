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
  selectedId: string = '';
  @Input() transactions: Transaction[] = [];
  @Output() onTransactionPress: EventEmitter<Transaction> = new EventEmitter();
  @Output() removeClick: EventEmitter<string> = new EventEmitter();

  constructor(private categoryService: CategoryService) {}

  getCategoryIcon(type: TransactionIconType) {
    return this.categoryService.getCategoryIcon(type);
  }

  handleOnTransactionPress(event: Transaction) {
    this.onTransactionPress.emit(event);
  }

  onRemoveClick(id: string) {
    this.removeClick.emit(id);
  }

  handleCheckUncheck(id: string) {
    if (this.selectedId != id) {
      this.selectedId = id;
    } else {
      this.selectedId = '';
    }
  }
}
