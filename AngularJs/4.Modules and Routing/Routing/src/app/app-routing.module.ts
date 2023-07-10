import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserResolver } from './user/user-details/user-details.resolver';
import { AuthGuard } from './user/user-details/user-details.guard';

//! can split the routing between modules or centralized from here                                                                                                                                                                          
const routes: Routes = [
  { path: '', pathMatch: 'full', component: UserListComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'todo-list', component: TodoListComponent },
  //add resolver and authGuard
  { path: 'user/details/:id', resolve: { user: UserResolver }, canActivate: [AuthGuard], component: UserDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
