import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HistoryDialogComponent } from '../history-dialog/history-dialog.component';

import HistoryData from 'src/app/interfaces/history/HistoryData';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss'],
})
export class HistoryTableComponent implements AfterViewInit {
  storageData = localStorage.getItem('convertion_data');
  displayedColumns: string[] = [
    'id',
    'icon',
    'convertionDate',
    'convertionTime',
    'inputValue',
    'originCurrency',
    'destinyCurrency',
    'outputValue',
    'rate',
    'action',
  ];
  dataSource!: MatTableDataSource<HistoryData>;
  convertionData: HistoryData[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog) {
    if (localStorage.getItem('convertion_data')) {
      this.convertionData = JSON.parse(this.storageData ?? '');
    }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.convertionData);
    console.log(this.convertionData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  protected openDialog(id: number) {
    this.dialog.open(HistoryDialogComponent, {
      data: {
        id: id,
        isSingleDelete: true,
        jsonData: this.convertionData,
      },
    });
  }
}
