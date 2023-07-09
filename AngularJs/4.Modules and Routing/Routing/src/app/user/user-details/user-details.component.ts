import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  // 1. add activeroute module and userservice
  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService) {
    // 2. take details param
    this.activeRoute.params.subscribe((v) => console.log(v))
  }
  ngOnInit(): void {

  }
}
