import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortByTypeTypes } from '../../interfaces/transaction-filter.interface';
import { Transaction } from '../../interfaces/transaction.interface';

@Component({
  selector: 'app-transactions-status',
  templateUrl: './transactions-status.component.html',
})
export class TransactionsStatusComponent {
  @Input() typeFilter: boolean = true;
  @Input() mountFilter: boolean = true;
  @Input() dateFilter: boolean = true;
  @Input() transactions: Transaction[] = [];

  @Output() byTypeChange: EventEmitter<SortByTypeTypes> = new EventEmitter();
  @Output() byDateChange: EventEmitter<Date> = new EventEmitter();
  @Output() byMountChange: EventEmitter<number> = new EventEmitter();

  onByTypeChange(type: SortByTypeTypes) {
    this.byTypeChange.emit(type);
  }

  onByDateChange(date: Date) {
    this.byDateChange.emit(date);
  }

  onByMountChange(mount: number) {
    this.byMountChange.emit(mount);
  }
}
