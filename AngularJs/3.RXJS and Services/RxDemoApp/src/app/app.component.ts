import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RxDemoApp';
  appUsers:any = [];
  //injection from the service
  constructor(public userService: UserService) {
    this.appUsers = this.userService.user;
  }
}
