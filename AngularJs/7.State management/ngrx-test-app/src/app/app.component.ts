import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.demoTest()
  }

  demoTest() { }
  // Redux -> design pattern => single source of true =>state
  // we dont chande the state directly, but dispatch an action
  // Reducer capters the action and do something

}
