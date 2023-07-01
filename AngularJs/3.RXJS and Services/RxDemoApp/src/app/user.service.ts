import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = [
    { name: 'ivo', age: 30 },
    { name: 'Toni', age: 36 },
  ];
  fetchUsers=[]
  constructor() {
    console.log('Business logic',this.user[0]);
  }
  getUsers(){
     return fetch('https://jsonplaceholder.typicode.com/users')
     .then((result)=>result.json())
  }
}
