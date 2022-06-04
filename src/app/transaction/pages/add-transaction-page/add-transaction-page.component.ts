import { Component } from '@angular/core';
import {
  TransactionCategory,
  TransactionType,
} from '../../interfaces/transaction.interface';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-add-transaction-page',
  templateUrl: './add-transaction-page.component.html',
})
export class AddTransactionPageComponent {
  mount: number = 0;
  description: string = '';
  categoryId: string = '';
  transactionType: TransactionType = TransactionType.EXPENSIVE;

  constructor(private transactionService: TransactionsService) {}

  onMountChange(event: string) {
    this.mount = Number(event);
    console.log(event);
    console.log(this.mount);
  }

  onDescriptionChange(description: string) {
    this.description = description;
  }

  onCategoryChange(categoryId: string) {
    this.categoryId = categoryId;
  }

  onTransactionTypeChange(type: TransactionType) {
    this.transactionType = type;
  }

  isFormValid() {
    if (!this.mount) {
      return false;
    }

    if (!this.categoryId) {
      return false;
    }

    if (!this.description) {
      return false;
    }

    if (!this.transactionType) {
      return false;
    }
    return true;
  }

  cleanForm() {
    this.mount = 0;
    this.description = '';
    this.categoryId = '';
  }

  async onSubmit() {
    if (this.isFormValid()) {
      await this.transactionService.addTransaction({
        category_id: this.categoryId,
        date: new Date(),
        description: this.description,
        mount: this.mount,
        type: this.transactionType!,
      });
      this.cleanForm();
      alert('Transaccion agregada');
    } else {
      alert('Debes completar todos los campos');
    }
  }
}
