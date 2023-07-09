import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';

//! can split the routing between modules or centralized from here                                                                                                                                                                          
const routes: Routes = [
  { path: '', pathMatch: 'full', component: UserListComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'user/details/:id', component: UserDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
