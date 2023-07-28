import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import SymbolsResponse from '../../interfaces/SymbolsResponse';

import { API_BASE_URL } from 'src/env/environment';

@Injectable({
  providedIn: 'root',
})
export class CoinService {
  constructor(private http: HttpClient) {}

  public getCoins() {
    return this.http.get<SymbolsResponse>(`${API_BASE_URL}/symbols`, {
      responseType: 'json',
    });
  }
}
