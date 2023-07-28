import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_BASE_URL } from 'src/env/environment';

@Injectable({
  providedIn: 'root',
})
export class CoinsService {
  constructor(private http: HttpClient) {}

  public getCoins() {
    return this.http.get(`${API_BASE_URL}\symbols`, {
      responseType: 'json',
    });
  }
}
