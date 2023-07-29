/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngularIconComponent } from './angular-icon.component';

describe('AngularIconComponent', () => {
  let component: AngularIconComponent;
  let fixture: ComponentFixture<AngularIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
