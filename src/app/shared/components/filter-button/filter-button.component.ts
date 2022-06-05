import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FilterButtonType } from '../../intefaces/filter-button.interface';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
})
export class FilterButtonComponent {
  dropdown: boolean = false;
  @Input() types: FilterButtonType[] = [];
  @Input() name: string = '';
  @Input() typeSelected: FilterButtonType = this.types[0] || {
    value: '',
    desc: '',
  };

  @Output() change: EventEmitter<FilterButtonType> = new EventEmitter();

  onSelect(typeSelected: FilterButtonType) {
    this.typeSelected = typeSelected;
    this.change.emit(this.typeSelected);
    this.dropdown = false;
  }

  onClick() {
    this.dropdown = !this.dropdown;
  }

  getDropdownIcon() {
    return this.dropdown ? faCaretUp : faCaretDown;
  }
}
