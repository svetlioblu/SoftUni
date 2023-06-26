import { Component, Input } from '@angular/core';
import{}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  @Input('myStringForItem') myItem: string = '';
}
