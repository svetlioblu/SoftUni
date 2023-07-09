import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  //Todo 1. inject router
  constructor(private router: Router) { }
  //Todo 2.config router(configured in app-routing.module), use navigateTo in btns
  navigateTo(path: string): void {
    this.router.navigate([path])
  }
}
