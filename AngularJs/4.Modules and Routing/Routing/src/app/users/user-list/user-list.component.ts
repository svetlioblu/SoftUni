import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/types/User';
import { UserService } from '../user.service';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
	userList: User[] = [];

	// 5. add constructor dependancy and onInit
	constructor(
		private userService: UserService,
		private globalLoaderService: GlobalLoaderService) { }

	ngOnInit(): void {
		this.globalLoaderService.showLoader()

		this.userService.fetchUsers().subscribe((users) => {
			next: this.userList = users;
		});
		this.globalLoaderService.hideLoader()

	}
}
