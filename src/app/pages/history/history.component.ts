import { Component, OnInit } from '@angular/core';

import HistoryData from 'src/app/interfaces/history/HistoryData';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  convertionData: HistoryData[] = JSON.parse(
    sessionStorage.getItem('convertion_data') || ''
  );

  constructor() {
    console.log(this.convertionData);
  }

  ngOnInit() {}
}
