/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoinService } from './coins.service';

describe('Service: Coins', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinService],
    });
  });

  it('should ...', inject([CoinService], (service: CoinService) => {
    expect(service).toBeTruthy();
  }));
});
