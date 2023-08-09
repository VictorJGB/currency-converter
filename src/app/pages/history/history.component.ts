import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { HistoryDialogComponent } from 'src/app/components/history-dialog/history-dialog.component';

import HistoryData from 'src/app/interfaces/history/HistoryData';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  storageData = localStorage.getItem('convertion_data');
  convertionData: HistoryData[] = [];

  constructor(public dialog: MatDialog) {
    if (localStorage.getItem('convertion_data')) {
      this.convertionData = JSON.parse(this.storageData ?? '');
    }
  }

  ngOnInit() {}

  protected deleteAll() {
    this.dialog.open(HistoryDialogComponent, {
      data: {
        jsonData: this.convertionData,
      },
    });
  }
}
