import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faQuestion, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-category-component',
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  @Input() id: string = '';
  @Input() icon: IconDefinition = faQuestion;
  @Input() name: string = 'categoria';
  @Input() color: string = '#7777ff';
  @Input() active: boolean = false;

  @Output() click: EventEmitter<string> = new EventEmitter();

  onClick() {
    this.click.emit(this.id);
  }
}
