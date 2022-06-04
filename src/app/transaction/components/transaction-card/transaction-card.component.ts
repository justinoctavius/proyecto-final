import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  faCaretDown,
  faCaretUp,
  faTrash,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { TransactionType } from '../../interfaces/transaction.interface';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
})
export class TransactionCardComponent {
  @Input() categoryName: string = '';
  @Input() icon: IconDefinition = faQuestion;
  @Input() transactionType?: TransactionType;
  @Input() mount: number = 0;
  @Input() description: string = '';
  @Input() date: Date = new Date();
  @Input() selected: boolean = false;

  @Output() removeClick: EventEmitter<void> = new EventEmitter();
  @Output() cardClick: EventEmitter<void> = new EventEmitter();

  trashIcon = faTrash;

  getTransactionTypeIcon() {
    if (this.transactionType === TransactionType.INCOMES) {
      return faCaretUp;
    }
    return faCaretDown;
  }

  getMountClass() {
    if (this.transactionType === TransactionType.INCOMES) {
      return 'font-bold text-green-700';
    }

    if (this.transactionType === TransactionType.EXPENSIVE) {
      return 'font-bold text-red-700';
    }

    return 'font-bold';
  }

  getSelectedStyles() {
    return {
      right: this.selected ? '0' : '-5rem',
    };
  }
  getContainerStyles() {
    return {
      paddingRight: this.selected ? '3rem' : '0',
    };
  }

  onRemoveClick() {
    this.removeClick.emit();
  }

  onCardClick() {
    this.cardClick.emit();
  }
}
