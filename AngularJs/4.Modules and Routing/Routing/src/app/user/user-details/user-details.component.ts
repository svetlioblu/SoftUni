
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  //todo 1. add activeRoute module and userservice
  constructor(private activeRoute: ActivatedRoute) {

    // takes all user beforehand
    console.log(this.activeRoute.snapshot.data['user']);

    //todo 2. take details param
    this.activeRoute.params.subscribe((v) => console.log(v))
  }

  ngOnInit(): void {

  }
}
