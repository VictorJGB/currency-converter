import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import ConvertResponse from 'src/app/interfaces/convert/ConvertResponse';
import HistoryData from 'src/app/interfaces/history/HistoryData';
import SymbolType from 'src/app/interfaces/symbols/SymbolType';

import Symbol from '../../classes/Symbol';

import { CoinService } from 'src/app/services/coins/coins.service';
import { ConvertCurrencyService } from 'src/app/services/convertCurrency/convert-currency.service';
import { LoaderService } from 'src/app/services/loader/loader.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  responseData!: ConvertResponse;
  isDataReturned!: boolean;
  symbols: Symbol[] = [];
  convertionData: HistoryData[] = [];

  convertForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private convertService: ConvertCurrencyService,
    private coinService: CoinService,
    protected loaderService: LoaderService
  ) {
    this.listCoins();
    this.createForm();
  }

  ngOnInit() {}

  protected createForm() {
    this.convertForm = this.formBuilder.group({
      originCurrency: ['', [Validators.required]],
      destinyCurrency: ['', [Validators.required]],
      convertValue: ['', [Validators.required, Validators.min(1)]],
    });
  }

  protected onSubmit() {
    this.isDataReturned = false;
    const originCurrency = this.convertForm.value.originCurrency;
    const destinyCurrency = this.convertForm.value.destinyCurrency;
    const value = this.convertForm.value.convertValue;
    this.convertForm.disabled;

    this.convertCurrency(originCurrency, destinyCurrency, value);
  }

  protected convertCurrency(from: string, to: string, amount: number) {
    this.convertService.convertCoin(from, to, amount, 2).subscribe({
      next: (data: ConvertResponse) => {
        (this.responseData = data), this.storeConvertion(this.responseData);
      },
      error: (error: Error) => console.log(error),
      complete: () => {
        this.isDataReturned = true;
      },
    });
  }

  protected storeConvertion(responseData: ConvertResponse) {
    let date = new Date();
    let currentDate =
      date.getDate() + ':' + (date.getMonth() + 1) + ':' + date.getFullYear();
    let currentTime =
      date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    let convertionInfo: HistoryData = {
      convertionDate: currentDate,
      convertionTime: currentTime,
      inputValue: responseData.query.amount,
      outputValue: responseData.result,
      originCurrency: responseData.query.from,
      destinyCurrency: responseData.query.to,
      rate: responseData.info.rate,
    };

    this.convertionData.push(convertionInfo);

    sessionStorage.setItem(
      'convertion_data',
      JSON.stringify(this.convertionData)
    );
  }

  protected listCoins() {
    this.coinService.getCoins().subscribe({
      next: (data: SymbolType[]) => {
        data.map((symbol: SymbolType) => {
          const newSymbol = new Symbol(symbol.description, symbol.code);
          this.symbols.push(newSymbol);
        });
      },
      error: (error) => console.log(error),
    });
  }
}
