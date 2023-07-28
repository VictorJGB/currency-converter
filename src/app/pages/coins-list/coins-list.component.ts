import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../services/coins/coins.service';
import SymbolsResponse from '../../interfaces/SymbolsResponse';
import Symbol from 'src/app/classes/Symbol';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.scss'],
})
export class CoinsListComponent implements OnInit {
  constructor(private coinService: CoinService) {}

  ngOnInit() {
    this.listCoins();
  }

  protected symbolsList: {
    [key: string]: { code: string; description: string };
  } = {};
  protected listCoins() {
    this.coinService.getCoins().subscribe((data: SymbolsResponse) => {
      this.symbolsList = data.symbols;
    });
  }
}
