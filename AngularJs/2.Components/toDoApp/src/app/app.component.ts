import { Component, ViewChild, ElementRef } from '@angular/core';
import { db } from './data/tasks';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('textInput', { static: false })
  textInput!: ElementRef<HTMLInputElement>;

  newElement(): void {
    const inputTaskValue = this.textInput.nativeElement.value;
    db.push({ label: inputTaskValue });
    this.textInput.nativeElement.value = '';
  }
}
