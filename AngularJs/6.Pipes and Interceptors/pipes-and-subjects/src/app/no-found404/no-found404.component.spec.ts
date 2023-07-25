import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFound404Component } from './no-found404.component';

describe('NoFound404Component', () => {
  let component: NoFound404Component;
  let fixture: ComponentFixture<NoFound404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoFound404Component]
    });
    fixture = TestBed.createComponent(NoFound404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
