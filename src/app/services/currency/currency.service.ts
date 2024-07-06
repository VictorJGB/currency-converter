import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API_BASE_URL } from 'src/env/environment';


@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  public getCurrencies() {
    return this.http
      .get(`${API_BASE_URL}/currencies`, {
      })
  }
}
