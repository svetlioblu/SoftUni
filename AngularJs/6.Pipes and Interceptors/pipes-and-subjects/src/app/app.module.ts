import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReducePipe } from './reduce.pipe';
import { HttpClientModule } from '@angular/common/http';
import { appInterceptorProvider } from './app.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ReducePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [appInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
