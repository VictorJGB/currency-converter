/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConvertCurrencyService } from './convert-currency.service';

describe('Service: ConvertCurrency', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConvertCurrencyService]
    });
  });

  it('should ...', inject([ConvertCurrencyService], (service: ConvertCurrencyService) => {
    expect(service).toBeTruthy();
  }));
});
