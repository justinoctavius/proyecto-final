import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
})
export class TransactionsPageComponent implements OnInit {
  constructor(private transactionsService: TransactionsService) {}

  get transactions() {
    return this.transactionsService.transactions;
  }

  async ngOnInit() {
    await this.transactionsService.getTransaction();
  }
}
