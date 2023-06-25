import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  title = 'hide';
  isActive = false;

  handleClick() {
    this.isActive = !this.isActive;
  }
}
