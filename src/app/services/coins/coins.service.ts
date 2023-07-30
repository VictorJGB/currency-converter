import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import SymbolsResponse from '../../interfaces/symbols/SymbolsResponse';
import SymbolType from 'src/app/interfaces/symbols/SymbolType';

import { API_BASE_URL } from 'src/env/environment';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  constructor(private http: HttpClient) {}

  public getCoins() {
    return this.http
      .get<SymbolsResponse>(`${API_BASE_URL}/symbols`, {
        responseType: 'json',
      })
      .pipe(
        map((response: SymbolsResponse) => {
          let coins: SymbolType[] = [];
          for (let key in response.symbols) {
            coins.push(response.symbols[key]);
          }
          return coins;
        })
      );
  }
}
