import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import HistoryData from 'src/app/interfaces/history/HistoryData';

export interface DialogData {
  id: number;
  jsonData: HistoryData[];
}

@Component({
  selector: 'app-history-dialog',
  templateUrl: './history-dialog.component.html',
  styleUrls: ['./history-dialog.component.scss'],
})
export class HistoryDialogComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {}

  protected deleteItem() {
    this.data.jsonData.splice(this.data.id, 1);
    localStorage.removeItem('convertion_data');
    localStorage.setItem('convertion_data', JSON.stringify(this.data.jsonData));
    this.dialog.closeAll();
    window.location.reload();
  }
}
