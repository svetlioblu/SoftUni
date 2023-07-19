import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm | undefined
  // ? prebuild reactive form
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required, Validators.maxLength(4)]
  })

  // ?reactivce: form inject FormBuilder
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
  // ?reactive: submit handler
  handleReactiveFormSubmit(): void {

  }

  //?templateDriven submit: from:NgForm can be in submitHandler param instead of @ViewChild.
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
