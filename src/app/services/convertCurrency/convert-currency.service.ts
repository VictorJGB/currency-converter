import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ConvertResponse from 'src/app/interfaces/convert/ConvertResponse';
import { API_BASE_URL } from 'src/env/environment';

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

  checkHighValue(convertFrom: string, convertValue: number, places?: number) {
    this.convertCoin(convertFrom, convertValue);
  }
}
