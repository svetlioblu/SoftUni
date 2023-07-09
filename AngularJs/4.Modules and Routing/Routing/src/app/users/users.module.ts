import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [UserListComponent],
})
export class UsersModule { }
