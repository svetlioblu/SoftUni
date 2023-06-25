import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: '<h1>Hello</h1>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'App component';
  
  onOutputFromChild(){
console.log('onOutputFromChild');
  }
}
