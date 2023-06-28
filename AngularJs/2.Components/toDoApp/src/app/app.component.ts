import { Component, ViewChild, ElementRef } from '@angular/core';
import { db } from './data/tasks';
import { ItemModel } from './models/item.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isInvalidInput: boolean = false;
  isDuplicatedInput: boolean = false;

  tasks: ItemModel[] = db.slice();
  @ViewChild('textInput')
  textInput!: ElementRef<HTMLInputElement>;


  get isTasksEmpty(): boolean {
    return this.tasks.length === 0;
  }

  newElement(): void {
    const inputTaskValue = this.textInput.nativeElement.value;
    if (this.tasks.find((x) => x.label.trim() == inputTaskValue.trim())) {
      this.isDuplicatedInput = true;
    } else if (inputTaskValue.length >= 2) {
      this.isInvalidInput = false;
      this.isDuplicatedInput = false;

      this.tasks.push({ label: inputTaskValue });
      this.textInput.nativeElement.value = '';
    } else {
      this.isInvalidInput = true;
    }
  }
  handleRemove(removeItem: string) {
    this.tasks = this.tasks.filter((x) => x.label !== removeItem);
  }
}
