import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemModel } from '../models/item.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() tasks: ItemModel[] = [];
  @Output() onRemoveClick: EventEmitter<string> = new EventEmitter();

  handleRemoveEvent(clickedItemLabel: string): void {
    this.onRemoveClick.emit(clickedItemLabel);
  }
}
