import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { Subscription, catchError } from 'rxjs';
import { ICustomer, ICustomerFilter } from '../data-grid.model';
import { DataGridService } from '../data-grid.service';

@Component({
  selector: 'app-data-grid-dynamic',
  templateUrl: './data-grid-dynamic.component.html',
  styleUrls: ['./data-grid-dynamic.component.scss']
})
export class DataGridDynamicComponent implements OnInit {

  dataSource: ICustomer[];
  displayedColumns: string[];
  columns: any[];
  totalRecords: number;
  inputFilter: ICustomerFilter;
  loadingRecords: boolean;
  private _subscriptions: Subscription[];
  private _timeoutId: any;
  @ViewChild(MatSort) sort!: MatSort
  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private _gridContext: DataGridService) {
    this.dataSource = [];
    this.displayedColumns = [];
    this.columns = [];
    this.totalRecords = 0;
    this.loadingRecords = false;
    this._subscriptions = [];
    this.inputFilter = { column: 'rowId', dynamicCols: 1, enablePagination: 1, page: 1, perPage: 5, sort: 'desc', searchString: '' };
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(sort => {
      this.onColumnSort(sort);
    });
    this.paginator.page.subscribe(page => {
      this.onPagination(page);
    })
  }

  ngOnInit(): void {
    this._filterGridData({
      ...this.inputFilter
    });
  }

  onColumnSort(sort: Sort) {
    this.inputFilter = { ...this.inputFilter, column: sort.active, sort: sort.direction };
    this._filterGridData(this.inputFilter);
  }

  onPagination(page: PageEvent) {
    this.inputFilter = { ...this.inputFilter, page: page.pageIndex + 1, perPage: page.pageSize };
    this._filterGridData(this.inputFilter);
  }

  onSearchString() {
    clearTimeout(this._timeoutId);

    if ((this.inputFilter.searchString?.length || 0) >= 3)
      this._timeoutId = setTimeout(() => {
        this._filterGridData({ ...this.inputFilter });
      }, 500);
  }

  onKeyDown() {
    clearTimeout(this._timeoutId);
  }

  onResetSearch() {
    this._filterGridData(this.inputFilter);
  }

  private _filterGridData(input: ICustomerFilter) {
    this.loadingRecords = true;
    this._subscriptions.push(
      this._gridContext.loadCustomers(input)
        .pipe(catchError(error => {
          this.dataSource = [];
          this.totalRecords = 0;
          this.loadingRecords = false;
          throw new Error(error);
        }))
        .subscribe(response => {
          this.loadingRecords = false;
          this.dataSource = response.rows;
          this.columns = response.columns;
          this.displayedColumns = this.columns.map(col => col.prop);
          this.totalRecords = response.totalRows;
        })
    );
  }

}
