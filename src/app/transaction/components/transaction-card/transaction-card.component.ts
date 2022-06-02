import { Component, Input } from '@angular/core';
import {
  faCaretDown,
  faCaretUp,
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
}
