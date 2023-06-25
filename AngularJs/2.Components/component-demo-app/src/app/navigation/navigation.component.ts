import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit, AfterViewInit {
  // inpit comes from parent parentName i qots
  @Input('titleFromApp') titleFromApp: string = '';
  @Output() onChildOutput = new EventEmitter<boolean>();
  isActive = false;
  inputValue = 'Hello';
  activeUsers = [
    { name: 'Mitko', age: 21 },
    { name: 'Ivan', age: 23 },
    { name: 'Toni', age: 33 },
    { name: 'Goro', age: 62 },
  ];
  // spred of number arguments
  handleClick(event: Event, ...args: number[]): void {
    this.isActive = !this.isActive;
    this.onChildOutput.emit(this.isActive); 
  }
  //lifecycles
  ngOnInit() {
    console.log('ON INIt!!');
  }
  ngAfterViewInit() {
    console.log('after view init!!');
  }
}
