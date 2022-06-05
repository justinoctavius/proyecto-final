export interface Transaction {
  id: string;
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
  iconType: TransactionIconType;
  color: string;
}

export enum TransactionIconType {
  TRANSPORT = 'TRANSPORT',
  LEADING = 'LEADING',
  OTHERS = 'OTHERS',
  HOME = 'HOME',
  ROUTINE = 'ROUTINE',
  FOOD = 'FOOD',
  FAMILY = 'FAMILY',
  GIFS = 'GIFS',
  EDUCATION = 'EDUCATION',
  COFFEE = 'COFFEE',
  HEALTH = 'HEALTH',
  WORK = 'WORK',
}

export enum TransactionType {
  INCOMES = 'INCOMES',
  EXPENSIVE = 'EXPENSIVE',
  MOVEMENT = 'MOVEMENT',
}
