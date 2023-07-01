import { Injectable } from '@angular/core';
//!import http client
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = [
    { name: 'ivo', age: 30 },
    { name: 'Toni', age: 36 },
  ];
  fetchUsers = [];
  constructor(private http: HttpClient) {
    console.log('Business logic', this.user[0]);
  }
  getUsers() {
    //todo Normal fetch promise
    // return fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((result) => result.json())
    //   .catch((err) => console.log(err.message));
    //todo Observable
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
