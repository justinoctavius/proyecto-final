import { Component, Output, EventEmitter } from '@angular/core';
import { TransactionType } from '../../interfaces/transaction.interface';

@Component({
  selector: 'app-transaction-type',
  templateUrl: './transaction-type.component.html',
})
export class TransactionTypeComponent {
  selected: TransactionType = TransactionType.EXPENSIVE;
  @Output() change: EventEmitter<TransactionType> = new EventEmitter();

  onChange(isExpensive: boolean) {
    const type = isExpensive
      ? TransactionType.EXPENSIVE
      : TransactionType.INCOMES;
    this.selected = type;
    this.change.emit(type);
  }

  isExpensive() {
    return this.selected === TransactionType.EXPENSIVE;
  }

  getActiveStyles(isActive: boolean = false) {
    return {
      backgroundColor: isActive
        ? 'rgb(6 95 70 / var(--tw-border-opacity))'
        : 'transparent',
      color: isActive ? 'white' : 'rgb(4 120 87 / var(--tw-text-opacity))',
    };
  }
}
