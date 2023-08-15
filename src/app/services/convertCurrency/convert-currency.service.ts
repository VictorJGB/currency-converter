import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from 'src/env/environment';

import ConvertResponse from 'src/app/interfaces/convert/ConvertResponse';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConvertCurrencyService {
  constructor(private http: HttpClient) {}

  convertCoin(
    convertFrom: string,
    convertTo: string,
    convertValue: number,
    places?: number
  ) {
    const queryParams = {
      from: convertFrom,
      to: convertTo,
      amount: convertValue,
      places: places ?? 4,
    };

    return this.http.get<ConvertResponse>(`${API_BASE_URL}/convert`, {
      params: queryParams,
      responseType: 'json',
    });
  }

  checkHighValue(
    checkParameter: number,
    convertFrom: string,
    convertValue: number,
    places?: number
  ) {
    const queryParams = {
      from: convertFrom,
      to: 'USD',
      amount: convertValue,
      places: places ?? 4,
    };

    return this.http
      .get<ConvertResponse>(`${API_BASE_URL}/convert`, {
        params: queryParams,
        responseType: 'json',
      })
      .pipe(
        map((data: ConvertResponse) => {
          return data.result >= checkParameter ? true : false;
        })
      );
  }
}
