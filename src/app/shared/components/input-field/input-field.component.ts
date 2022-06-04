import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
})
export class InputFieldComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() name: string = 'input';
  @Input() leftAdornment: string = '';
  @Input() value: string = '';

  @Output() valueChange: EventEmitter<string> = new EventEmitter();

  handler(event: any) {
    this.value = event;
    this.valueChange.emit(event);
  }
}
