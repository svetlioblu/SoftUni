import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FetchedUsersComponent } from './fetched-users/fetched-users.component';
//!immport httpclient, add in imports too.
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FetchedUsersComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
