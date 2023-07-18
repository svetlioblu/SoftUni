import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm | undefined
  // from:NgForm can be in submitHandler param instead of @ViewChild.

  ngOnInit(): void {
    // will be rendered only the static content
  
  }

  // ngAfterViewInit():void {
  // will render the final content with dynamic components
  // }


  submitHandler(): void {
    if (!this.loginForm) {
      return
    }
    const form = this.loginForm
    const value: { email: string, password: string } = form.value
    // form.reset() -> can reset values
    //-> can set values form.setValue(
    //   {
    //     email: '',
    //     password: ''
    //   }
    // )
    // the form.invalid catches atributes email and required
    if (form.invalid) {
      return
    }
  }
}
