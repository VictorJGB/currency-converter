import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../services/coins/coins.service';

@Component({
  selector: 'app-coins-list',
  templateUrl: './coins-list.component.html',
  styleUrls: ['./coins-list.component.scss'],
})
export class CoinsListComponent implements OnInit {
  constructor(private coinService: CoinService) {}

  ngOnInit() {}
}
