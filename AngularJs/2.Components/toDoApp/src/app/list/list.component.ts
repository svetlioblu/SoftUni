import { Component } from '@angular/core';
import { db } from '../data/tasks';
import { ItemModel } from '../models/item.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  tasks: ItemModel[] = db;

  handleRemoveEvent(clickedItemLabel: string): void {
    this.tasks = this.tasks.filter((x) => x.label !== clickedItemLabel);
  }
}
