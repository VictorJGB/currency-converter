/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GithubIconComponent } from './github-icon.component';

describe('GithubIconComponent', () => {
  let component: GithubIconComponent;
  let fixture: ComponentFixture<GithubIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
