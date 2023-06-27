import { Component, ViewChild, ElementRef } from '@angular/core';
import { db } from './data/tasks';
import { ItemModel } from './models/item.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isValidInput: boolean = false;
  tasks: ItemModel[] = db.slice();
  @ViewChild('textInput', { static: false })
  textInput!: ElementRef<HTMLInputElement>;

  newElement(): void {
    const inputTaskValue = this.textInput.nativeElement.value;
    if (inputTaskValue.length >= 2) {
      this.isValidInput = false;
      this.tasks.push({ label: inputTaskValue });

      this.textInput.nativeElement.value = '';
    } else {
      this.isValidInput = true;
      return;
    }
  }
  handleRemove(removeItem: string) {
    this.tasks = this.tasks.filter((x) => x.label !== removeItem);
  }
  
}
