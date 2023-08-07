import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import HistoryData from 'src/app/interfaces/history/HistoryData';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.scss'],
})
export class HistoryTable implements AfterViewInit {
  displayedColumns: string[] = [
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
  convertionData: HistoryData[] = JSON.parse(
    sessionStorage.getItem('convertion_data') || ''
  );

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Assign the data to the data source for the table to render

    this.dataSource = new MatTableDataSource(this.convertionData);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
