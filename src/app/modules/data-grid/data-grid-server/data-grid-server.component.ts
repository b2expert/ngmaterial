import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { Subscription, map, catchError } from 'rxjs';
import { ICustomer, ICustomerFilter } from '../data-grid.model';
import { DataGridService } from '../data-grid.service';

@Component({
  selector: 'app-data-grid-server',
  templateUrl: './data-grid-server.component.html',
  styleUrls: ['./data-grid-server.component.scss']
})
export class DataGridServerComponent implements OnInit, AfterViewInit {

  dataSource: ICustomer[];
  displayedColumns: string[];
  totalRecords: number;
  inputFilter: ICustomerFilter;
  loadingRecords: boolean;
  private _subscriptions: Subscription[];
  private _typingTimmer: any;
  @ViewChild(MatSort) sort!: MatSort
  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private _gridContext: DataGridService) {
    this.dataSource = [];
    this.displayedColumns = [];
    this.totalRecords = 0;
    this.loadingRecords = false;
    this._subscriptions = [];
    this.inputFilter = { column: 'rowId', dynamicCols: 0, enablePagination: 1, page: 1, perPage: 5, sort: 'desc', searchString: '' };
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(sort => {
      this.onSorting(sort);
    });
    this.paginator.page.subscribe(page => {
      this.onPaging(page);
    });
  }

  ngOnInit(): void {
    this._filterGridData({
      ...this.inputFilter
    });
  }

  onInputSearch() {
    clearTimeout(this._typingTimmer);
    if ((this.inputFilter.searchString?.length || 0) >= 3)
      this._typingTimmer = setTimeout(() => {
        this.inputFilter = { ...this.inputFilter, page: 1 }
        this._filterGridData(this.inputFilter);
      }, 500);
  }

  onKeydownSearch() {
    clearTimeout(this._typingTimmer);
  }

  onSorting(sort: Sort) {
    this.inputFilter = { ...this.inputFilter, sort: sort.direction, column: sort.active }
    this._filterGridData(this.inputFilter);
  }

  onPaging(page: PageEvent) {
    this.inputFilter = { ...this.inputFilter, page: page.pageIndex + 1, perPage: page.pageSize }
    this._filterGridData(this.inputFilter);
  }

  onReset() {
    this._filterGridData({...this.inputFilter});
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
          this.displayedColumns = response.columns;
          this.totalRecords = response.totalRows;
        })
    );
  }

}
