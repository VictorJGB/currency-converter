import { Component, OnInit } from '@angular/core';

import ConvertResponse from 'src/app/interfaces/convert/ConvertResponse';
import SymbolType from 'src/app/interfaces/symbols/SymbolType';

import Symbol from '../../classes/Symbol';

import { CoinService } from 'src/app/services/coins/coins.service';
import { ConvertCurrencyService } from 'src/app/services/convertCurrency/convert-currency.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  responseData!: ConvertResponse;
  symbols: Symbol[] = [];
  selectedOriginCurrency: string = '';
  selectedDestinyCurrency: string = '';
  convertAmount: number = 0.0;
  valueFormControl = new FormControl('', [
    Validators.required,
    Validators.min(0),
  ]);

  constructor(
    private convertService: ConvertCurrencyService,
    private coinService: CoinService,
    private formBuilder: FormBuilder
  ) {
    this.convertCurrency('USD', 'BRL', 10);
    this.listCoins();
  }

  ngOnInit() {}

  protected convertCurrency(from: string, to: string, amount: number) {
    this.convertService.convertCoin(from, to, amount).subscribe({
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
