import { Component, Inject, OnInit } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {}

  protected DeleteHistory() {
    if (this.data.isSingleDelete && this.data.id != null) {
      this.data.jsonData.splice(this.data.id, 1);
      localStorage.setItem(
        'convertion_data',
        JSON.stringify(this.data.jsonData)
      );
    } else {
      localStorage.removeItem('convertion_data');
    }
    this.dialog.closeAll();
    window.location.reload();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
