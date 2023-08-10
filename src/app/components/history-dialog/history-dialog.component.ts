import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import HistoryData from 'src/app/interfaces/history/HistoryData';

export interface DialogData {
  id?: number;
  isSingleDelete?: boolean;
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

  // TODO: Bug when deleting the first index
  protected DeleteHistory() {
    console.log(this.data.isSingleDelete, this.data.id >= 0);
    if (this.data.isSingleDelete && this.data.id) {
      this.data.jsonData.splice(this.data.id, 0);
      localStorage.setItem(
        'convertion_data',
        JSON.stringify(this.data.jsonData)
      );
    } else if(!this.data.isSingleDelete ) {
      console.log('else teste');
      // localStorage.removeItem('convertion_data');
    }
    this.dialog.closeAll();
    // window.location.reload();
  }
}
