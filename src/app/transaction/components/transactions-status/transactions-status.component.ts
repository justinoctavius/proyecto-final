import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transactions-status',
  templateUrl: './transactions-status.component.html',
})
export class TransactionsStatusComponent {
  @Input() typeFilter: boolean = true;
  @Input() mountFilter: boolean = true;
  @Input() dateFilter: boolean = true;
}
