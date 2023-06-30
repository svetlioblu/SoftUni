import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxDemoApp';
  appUsers: any = [];
  //injection from the user.service
  constructor(public userService: UserService) {
    this.appUsers = this.userService.user;

    // async analogy Observe
    const o = new Observable((observer) => {
      observer.next(100);
      observer.next(500);
    });
    o.subscribe((data) => console.log(data));
  }
}
