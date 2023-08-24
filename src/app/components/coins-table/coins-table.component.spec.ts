import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { CoinsTableComponent } from './coins-table.component';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { CoinService } from 'src/app/services/coins/coins.service';

import { COINS_RESPONSE } from 'src/app/tests/mocks/coinListResponse';

import { API_BASE_URL } from 'src/env/environment';
import { MatFormFieldModule } from '@angular/material/form-field';

import SymbolType from 'src/app/interfaces/symbols/SymbolType';

fdescribe('CoinsTableComponent', () => {
  let component: CoinsTableComponent;
  let fixture: ComponentFixture<CoinsTableComponent>;
  let service: CoinService;
  let testURl = `${API_BASE_URL}/symbols`;
  let httpTestController: HttpTestingController;

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
    const component = fixture.componentInstance;
    const service = TestBed.inject(CoinService);
    const httpTestController = TestBed.inject(HttpTestingController);
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

  it('should get coins list', waitForAsync(() => {
    // Converting object data to array
    const mockData: SymbolType[] = [];
    Object.entries(COINS_RESPONSE).forEach(([key, value]) => {
      mockData.push({
        description: value.description,
        code: value.code,
      });
    });

    const req = httpTestController.expectOne(testURl);

    service.getCoins().subscribe({
      next: (data) => {
        expect(data).toEqual(mockData);
      },
    });
    expect(req.request.method).toEqual('GET');
  }));

  afterAll(() => {
    httpTestController.verify();
  });
});
