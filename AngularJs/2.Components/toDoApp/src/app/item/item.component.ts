import { Component, Input } from '@angular/core';
import { ItemModel } from '../models/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input() label: string = '';
  isItemSelected: boolean = false;

  lineTrough(): void {
    this.isItemSelected =!this.isItemSelected
  }
}
