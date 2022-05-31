import { TransactionType } from '../interfaces/transaction.interface';

export interface UpdateTransactionDto {
  id?: string;
  mount?: number;
  description?: string;
  type?: TransactionType;
  category_id?: string;
  date: Date;
}
