import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = [
    { name: 'ivo', age: 30 },
    { name: 'Toni', age: 36 },
  ];
  constructor() {
    console.log('Business logic',this.user[0]);
  }
}
