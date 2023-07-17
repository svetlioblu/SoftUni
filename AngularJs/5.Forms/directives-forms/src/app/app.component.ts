import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitHandler(form: NgForm): void {
    console.log(form.value);
    const value: { email: string, password: string } = form.value
    // form.reset() -> can reset values
    //-> can set values form.setValue(
    //   {
    //     email: '',
    //     password: ''
    //   }
    // )
    if (form.invalid) {
      return
    }
  }
}
