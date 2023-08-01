import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import ConvertResponse from 'src/app/interfaces/convert/ConvertResponse';
import SymbolType from 'src/app/interfaces/symbols/SymbolType';

import Symbol from '../../classes/Symbol';

import { CoinService } from 'src/app/services/coins/coins.service';
import { ConvertCurrencyService } from 'src/app/services/convertCurrency/convert-currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  responseData!: ConvertResponse;
  symbols: Symbol[] = [];

  convertForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private convertService: ConvertCurrencyService,
    private coinService: CoinService
  ) {
    this.listCoins();
    this.createForm();
  }

  ngOnInit() {}

  protected createForm() {
    this.convertForm = this.formBuilder.group({
      originCurrency: ['', Validators.required],
      destinyCurrency: ['', Validators.required],
      convertValue: ['', [Validators.required, Validators.min(0)]],
    });
  }

  protected onSubmit() {
    const originCurrency = this.convertForm.value.originCurrency;
    const destinyCurrency = this.convertForm.value.destinyCurrency;
    const value = this.convertForm.value.convertValue;

    this.convertCurrency(originCurrency, destinyCurrency, value);
    console.log(this.responseData);
  }

  protected convertCurrency(from: string, to: string, amount: number) {
    this.convertService.convertCoin(from, to, amount, 2).subscribe({
      next: (data: ConvertResponse) => {
        this.responseData = data;
      },
      error: (error: Error) => console.log(error),
    });
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
