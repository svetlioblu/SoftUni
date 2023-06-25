import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  title = 'hide';
  isActive = false;
  activeUsers = [
    { name: 'Mitko', age: 21 },
    { name: 'Ivan', age: 23 },
    { name: 'Toni', age: 33 },
    { name: 'Goro', age: 62 },
  ];
    
  handleClick(): void {
    this.isActive = !this.isActive;
  }
}
