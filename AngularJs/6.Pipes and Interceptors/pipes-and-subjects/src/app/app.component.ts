import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = { name: 'Pesho', age: 12, list: [1, 2, 3, 4, 5, 6, 7, 8] }
  p = Promise.resolve(100)
  sum(a: number, b: number): number {
    return a + b
  }

  addProperty(): void {
    (this.user as any)['test123'] = 'test123'
  }

}
