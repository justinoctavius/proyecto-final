import { Injectable } from '@angular/core';
import {
  faBook,
  faBriefcase,
  faBriefcaseMedical,
  faBus,
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
  TransactionCategory,
  TransactionIconType,
} from '../interfaces/transaction.interface';
import { CategoryApiService } from './category-api.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: TransactionCategory[] = [];

  constructor(private categoryApiService: CategoryApiService) {}

  async getCategories() {
    this.categories = await this.categoryApiService.getCategories();
  }

  getCategoryIcon(type: TransactionIconType) {
    switch (type) {
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
}
