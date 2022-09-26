import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map, Subscription } from 'rxjs';
import { ICustomer, ICustomerFilter, IGrid } from '../data-grid.model';
import { DataGridService } from '../data-grid.service';

@Component({
  selector: 'app-data-grid-client',
  templateUrl: './data-grid-client.component.html',
  styleUrls: ['./data-grid-client.component.scss']
})
export class DataGridClientComponent implements OnInit {

  dataSource: MatTableDataSource<ICustomer>;
  displayedColumns: string[];
  totalRecords: number;
  inputFilter: ICustomerFilter;
  private _subscriptions: Subscription[];
  @ViewChild(MatSort) sort!: MatSort
  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private _gridContext: DataGridService) {
    this.dataSource = new MatTableDataSource();
    this.displayedColumns = [];
    this.totalRecords = 0;
    this._subscriptions = [];
    this.inputFilter = { column: 'rowId', dynamicCols: 0, enablePagination: 1, page: 1, perPage: 150, sort: 'desc', searchString: '' };
  }

  ngOnInit(): void {
    this._filterGridData({
      ...this.inputFilter
    });
  }

  onSorting(sort: Sort) {
    this._filterGridData({
      ...this.inputFilter,
      sort: sort.direction
    });
  }

  onPaging(sort: Sort) {
    this._filterGridData({
      ...this.inputFilter,
      sort: sort.direction
    });
  }

  private _filterGridData(input: ICustomerFilter) {

    this._subscriptions.push(
      this._gridContext.customer.loadCustomers(input)
        .pipe(map(catchError => {
          this.dataSource = new MatTableDataSource();
          this.totalRecords = 0;
          return catchError;
        }))
        .subscribe(response => {
          this.dataSource = new MatTableDataSource(response.rows);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.displayedColumns = response.columns;
        })
    );
  }

}
