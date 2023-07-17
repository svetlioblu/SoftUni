import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightOnMoveDirective } from './highlight-on-move.directive';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MyrouterlinkDirective } from './myrouterlink.directive';
import { MyStructuralDirectiveDirective } from './my-structural-directive.directive';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HighlightOnMoveDirective,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MyrouterlinkDirective,
    MyStructuralDirectiveDirective,
    DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
