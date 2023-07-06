import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
//1 OnInit
export class UserService implements OnInit {
  // 3. add HttpClient. Import globally in app.module.ts because can need in other services
  constructor(private http: HttpClient) {}
  // 2: initiate OnInit
  ngOnInit(): void {}

  fetchUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
