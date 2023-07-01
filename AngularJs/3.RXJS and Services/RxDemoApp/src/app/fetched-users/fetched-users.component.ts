import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fetched-users',
  templateUrl: './fetched-users.component.html',
  styleUrls: ['./fetched-users.component.css'],
})
export class FetchedUsersComponent {
  @Input() user:any;

}
