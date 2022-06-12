import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-date-button',
  templateUrl: './filter-date-button.component.html',
})
export class FilterDateButtonComponent {
  @Input() name: string = '';

  @Output() changeDate: EventEmitter<Date> = new EventEmitter();

  onChange(event: any) {
    const date = event.target.value;
    this.changeDate.emit(date);
  }
}
