import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-mount-button',
  templateUrl: 'filter-mount-button.component.html',
})
export class FilterMountButtonComponent {
  value?: number;
  timeoutId?: any;
  @Output() changeMount: EventEmitter<number> = new EventEmitter();

  emitEventChange(value: number) {
    this.value = value;
    this.changeMount.emit(this.value || 0);
  }

  handleClearTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  onChange(value: number) {
    this.handleClearTimeout();
    this.timeoutId = setTimeout(() => {
      this.emitEventChange(value);
    }, 1000);
  }
}
