import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
})
export class IconButtonComponent {
  @Input() icon: IconDefinition = faPlus;
  @Input() color: string = '#f59e0b';
  @Output() click: EventEmitter<void> = new EventEmitter();

  handleOnClick() {
    this.click.emit();
  }
}
