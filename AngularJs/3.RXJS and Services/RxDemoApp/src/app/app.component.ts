import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // can add service 3 ways into the componend, app.module.ts, the service provideIn
})
export class AppComponent {
  title = 'RxDemoApp';
  appUsers: any = [];
  //injection from the user.service
  constructor(public userService: UserService) {
    this.appUsers = this.userService.user;

    function interval(intervalValue: number) {
      // async analogy Observe
      return new Observable<number>((observer) => {
        // observer.next(100);
        // observer.next(500);
        let counter = 0;
        const timerInterval = setInterval(() => {
          observer.next(counter++);
        }, intervalValue);

        //this is invoked on destroy
        return () => {
          clearInterval(timerInterval);
        };
      });
    }
    // can subscribe for the data here several ways. Use stream$ as practice
    // the async proces scontinues on the bacground if we not subscribe 
    //interval(3000).subscribe((data) => console.log(data));
    const stream$ = interval(3000).pipe(map((x) => x *2));
    stream$.subscribe({
      next: (x) => console.log('data =' + x),
      error: (err) => console.log('Error occured ' + err),
      complete: () => console.log('Stream has compleated'),
    });
  }
}
