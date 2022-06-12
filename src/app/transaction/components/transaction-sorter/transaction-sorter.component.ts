import { Component, Input } from '@angular/core';
import { FilterButtonType } from 'src/app/shared/intefaces/filter-button.interface';
import {
  SortByDateTypes,
  SortByMountTypes,
  TransactionFilterSortBy,
} from '../../interfaces/transaction-filter.interface';
import { Transaction } from '../../interfaces/transaction.interface';
import { SorterService } from '../../services/sorter.service';

@Component({
  selector: 'app-transaction-sorter',
  templateUrl: './transaction-sorter.component.html',
})
export class TransactionSorterComponent {
  @Input() transactions: Transaction[] = [];
  constructor(private sorterService: SorterService) {}

  byDate: TransactionFilterSortBy = {
    name: 'fecha',
    types: [
      { value: SortByDateTypes.ASC, desc: 'recientes' },
      { value: SortByDateTypes.DESC, desc: 'antiguas' },
    ],
  };
  byMount: TransactionFilterSortBy = {
    name: 'monto',
    types: [
      { value: SortByMountTypes.ASC, desc: 'mayor' },
      { value: SortByMountTypes.DESC, desc: 'menor' },
    ],
  };

  onSortByDateChange(selected: FilterButtonType) {
    this.sorterService.sortTransactionsByDate(
      selected.value as SortByDateTypes,
      this.transactions
    );
  }

  onSortByMountChange(selected: FilterButtonType) {
    this.sorterService.sortTransactionsByMount(
      selected.value as SortByMountTypes,
      this.transactions
    );
  }
}
