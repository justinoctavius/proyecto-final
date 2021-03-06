import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { TransactionIconType } from '../../interfaces/transaction.interface';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent implements OnInit {
  @Input() categoryId: string = '';
  @Output() onSelect: EventEmitter<string> = new EventEmitter();

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories();
  }

  getCategoryIcon(type: TransactionIconType) {
    return this.categoryService.getCategoryIcon(type);
  }

  setSelectedCategory(id: string) {
    this.categoryId = id;
    this.onSelect.emit(id);
  }

  get categories() {
    return this.categoryService.categories;
  }
}
