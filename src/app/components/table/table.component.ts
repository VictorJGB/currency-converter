import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import Symbol from 'src/app/classes/Symbol';
import SymbolType from 'src/app/interfaces/SymbolType';

import { CoinService } from 'src/app/services/coins/coins.service';

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['code', 'description'];
  symbols: Symbol[] = [];
  dataSource!: MatTableDataSource<Symbol>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private coinService: CoinService) {
    this.listCoins();
    this.dataSource = new MatTableDataSource(this.symbols);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  protected listCoins() {
    this.coinService.getCoins().subscribe({
      next: (data: SymbolType[]) => {
        data.map((symbol: SymbolType) => {
          const newSymbol = new Symbol(symbol.description, symbol.code);
          this.symbols.push(newSymbol);
        });
      },
      error: (error) => console.log(error),
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
