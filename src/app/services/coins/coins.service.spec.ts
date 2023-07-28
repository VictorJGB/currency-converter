/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CoinsService } from './coins.service';

describe('Service: Coins', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoinsService]
    });
  });

  it('should ...', inject([CoinsService], (service: CoinsService) => {
    expect(service).toBeTruthy();
  }));
});
