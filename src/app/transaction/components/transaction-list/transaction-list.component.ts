import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaction } from '../../interfaces/transaction.interface';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
})
export class TransactionListComponent {
  @Input() transactions: Transaction[] = [];
  @Output() onTransactionPress: EventEmitter<Transaction> = new EventEmitter();

  handleOnTransactionPress(event: Transaction) {
    this.onTransactionPress.emit(event);
  }
}
