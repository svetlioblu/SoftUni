import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FetchedUsersComponent } from './fetched-users/fetched-users.component';

@NgModule({
  declarations: [
    AppComponent,
    FetchedUsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
