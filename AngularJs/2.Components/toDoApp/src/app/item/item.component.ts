import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() label: string = '';
  @Output() onRemoveClick: EventEmitter<string> = new EventEmitter();
  isItemSelected: boolean = false;

  lineTrough(): void {
    this.isItemSelected = !this.isItemSelected;
  }

  removeItem(): void {
    this.onRemoveClick.emit(this.label);
    
  }
}
