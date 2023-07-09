import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  // 1. inject router
  constructor(private router: Router) { }
  //2.config router, use navigateTo in btns
  navigateTo(path: string): void {
    this.router.navigate([path])
  }
}
