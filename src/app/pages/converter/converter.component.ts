import { Component, OnInit } from '@angular/core';
import ConvertResponse from 'src/app/interfaces/convert/ConvertResponse';
import { ConvertCurrencyService } from 'src/app/services/convertCurrency/convert-currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class ConverterComponent implements OnInit {
  responseData!: ConvertResponse;

  constructor(private convertService: ConvertCurrencyService) {
    this.convertService.convertCoin('URL', 'BRL', 10).subscribe({
      next: (data: ConvertResponse) => {
        this.responseData = data;
        console.log(this.responseData);
      },
      error: (error: Error) => console.log(error),
    });
  }

  ngOnInit() {}
}
