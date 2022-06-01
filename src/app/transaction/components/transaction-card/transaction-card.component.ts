import { Component, Input, Output } from '@angular/core';
import {
  faBook,
  faBriefcase,
  faBriefcaseMedical,
  faBus,
  faCaretDown,
  faCaretUp,
  faCircleQuestion,
  faDumbbell,
  faGift,
  faHandHoldingDollar,
  faHouse,
  faMugSaucer,
  faPeopleGroup,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import {
  TransactionType,
  TransactionIconType,
} from '../../interfaces/transaction.interface';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
})
export class TransactionCardComponent {
  @Input() categoryName: string = '';
  @Input() iconType: TransactionIconType = TransactionIconType.OTHERS;
  @Input() transactionType?: TransactionType;
  @Input() mount: number = 0;

  getIcon() {
    switch (this.iconType) {
      case TransactionIconType.TRANSPORT:
        return faBus;
      case TransactionIconType.ROUTINE:
        return faDumbbell;
      case TransactionIconType.FOOD:
        return faUtensils;
      case TransactionIconType.EDUCATION:
        return faBook;
      case TransactionIconType.COFFEE:
        return faMugSaucer;
      case TransactionIconType.GIFS:
        return faGift;
      case TransactionIconType.HEALTH:
        return faBriefcaseMedical;
      case TransactionIconType.HOME:
        return faHouse;
      case TransactionIconType.FAMILY:
        return faPeopleGroup;
      case TransactionIconType.WORK:
        return faBriefcase;
      case TransactionIconType.LEADING:
        return faHandHoldingDollar;
      default:
        return faCircleQuestion;
    }
  }

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
