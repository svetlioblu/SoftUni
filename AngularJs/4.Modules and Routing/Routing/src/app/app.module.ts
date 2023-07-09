import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';
import { TodoModule } from './todo/todo.module';
import { UserDetailsComponent } from './user/user-details/user-details.component';
@NgModule({
  declarations: [AppComponent, UserDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    UsersModule,
    TodoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
