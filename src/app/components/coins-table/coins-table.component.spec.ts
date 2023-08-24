import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { CoinsTableComponent } from './coins-table.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { MatFormFieldModule } from '@angular/material/form-field';

describe('CoinsTableComponent', () => {
  let component: CoinsTableComponent;
  let fixture: ComponentFixture<CoinsTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CoinsTableComponent],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatFormFieldModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(CoinsTableComponent);
    const componentFixture = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should render search filter input', () => {
    const debugFixture: HTMLElement = fixture.debugElement.nativeElement;
    const filterInput = debugFixture.querySelector('#filter-input');
    expect(filterInput).toBeTruthy();
  });
});
