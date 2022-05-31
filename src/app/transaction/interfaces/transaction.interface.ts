export interface Transaction {
  description: string;
  mount: number;
  date: Date;
  type: TransactionType;
  category: TransactionCategory;
}

export interface TransactionCategory {
  id: string;
  name: string;
  description: string;
  picture_url: string;
}

export enum TransactionType {
  INCOMES = 'INCOMES',
  EXPENSIVE = 'EXPENSIVE',
  MOVEMENT = 'MOVEMENT',
}
