/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';

import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { CoinService } from './coins.service';

import SymbolType from 'src/app/interfaces/symbols/SymbolType';

import { COINS_RESPONSE } from 'src/app/tests/mocks/coinListResponse';

import { API_BASE_URL } from 'src/env/environment';

fdescribe('Service: Coins', () => {
  let service: CoinService;
  let testURl = `${API_BASE_URL}/symbols`;
  let httpTestController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinService, HttpClient, HttpHandler],
    });
  });

  it('should ...', inject([CoinService], (service: CoinService) => {
    expect(service).toBeTruthy();
  }));

  it('should get coins list', waitForAsync(() => {
    const req = httpTestController.expectOne(testURl);

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
    });

    expect(req.request.method).toEqual('GET');
  }));

  afterAll(() => {
    httpTestController.verify();
  });
});
