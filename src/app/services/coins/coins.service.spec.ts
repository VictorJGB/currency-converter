/* tslint:disable:no-unused-variable */
import { of } from 'rxjs';

import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { HttpClient } from '@angular/common/http';

import { CoinService } from './coins.service';

import SymbolType from 'src/app/interfaces/symbols/SymbolType';

import { COINS_RESPONSE } from 'src/app/tests/mocks/coinListResponse';

import { API_BASE_URL } from 'src/env/environment';

fdescribe('Service: Coins', () => {
  let service: CoinService;
  let httpTestController: HttpTestingController;
  let testURl = `${API_BASE_URL}/symbols`;

  beforeEach(() => {
    service = TestBed.inject(CoinService);
    httpTestController = TestBed.inject(HttpTestingController);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoinService],
    });
  });

  it('should ...', () => {
    expect(service).toBeTruthy();
  });

  describe('getCoins()', () => {
    it('should return coins list', (done: DoneFn) => {
      // Converting object data to array
      const mockData: SymbolType[] = [];
      Object.entries(COINS_RESPONSE).forEach(([key, value]) => {
        mockData.push({
          description: value.description,
          code: value.code,
        });
      });

      service.getCoins().subscribe((data) => {
        expect(data).toEqual(mockData);
        done();
      });

      const request = httpTestController.expectOne(testURl);
      request.flush(mockData);
      expect(request.request.method).toBe('GET');
    });

    afterAll(() => {
      httpTestController.verify();
    });
  });
});
