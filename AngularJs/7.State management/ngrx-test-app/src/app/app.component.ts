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

  demoTest() {
    // Redux -> design pattern => single source of true =>state
    // we dont chande the state directly, but dispatch an action
    // Reducer capters the action and do something

    //type
    interface AppState {
      str: string,
      obj: any,
      bool: boolean
    }
    //intitial state
    const initialState: AppState = {
      str: '',
      obj: null,
      bool: false
    }

    //actions
    const EVENT_ONE = 'EVENT_1'
    const EVENT_TWO = 'EVENT_2'
    const EVENT_THREE = 'EVENT_3'

    //reducer
    function reducer(state: AppState, action: any) {
      // return acc + curr
    }

    //combine events + reducer and initial state
    const eventCollection = [
      { type: EVENT_ONE, value: 'test123' },
      { type: EVENT_TWO, value: { name: 'Pesho', age: 21 } },
      { type: EVENT_THREE, value: true },
    ]
    const result = eventCollection.reduce(reducer, initialState)
    console.log(result);

  }
}
