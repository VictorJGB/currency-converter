import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// currency
import Currency from 'src/app/interfaces/Currency';
import { CurrencyService } from '../../services/currency/currency.service';


import { LoaderService } from 'src/app/services/loader/loader.service';

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss'],
})
export class CurrenciesTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['code', 'description'];
  currencies: Currency[] = [];
  dataSource!: MatTableDataSource<Currency>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private currencyService: CurrencyService,
    protected loader: LoaderService
  ) {
    this.listCurrencies();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  protected listCurrencies() {
    this.currencyService.getCurrencies().subscribe({
      next: (data) => {
        for (const [key, value] of Object.entries(data)){
          this.currencies.push({
            code: key,
            description: value,
          });
        }
      },
      error: (error) => console.log(error),
      complete: () => {
        this.dataSource = new MatTableDataSource(this.currencies);
      },
    });
  }

  protected applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
