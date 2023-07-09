import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root',
})
//1 OnInit
export class UserService implements OnInit {
  // 3. add HttpClient. Import globally in app.module.ts because can need in other services
  constructor(private http: HttpClient) { }
  // 2: initiate OnInit
  ngOnInit(): void { }

  fetchUsers() {
    // 4. import in user-list.component.ts, check how there
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
  fetchOneUsers(id:number) {
    // get ssingle user 
    return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

}
