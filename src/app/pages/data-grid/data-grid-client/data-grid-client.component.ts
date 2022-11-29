import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map, Subscription } from 'rxjs';
import { ICustomer, ICustomerFilter, IGrid } from '../data-grid.model';
import { DataGridService } from '../data-grid.service';
import { CustFormComponent } from './cust-form/cust-form.component';

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
  loading: boolean = false;
  private _subscriptions: Subscription[];
  @ViewChild(MatSort) sort!: MatSort
  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private _gridContext: DataGridService, private _dialogContext: MatDialog) {
    this.dataSource = new MatTableDataSource();
    this.displayedColumns = [];
    this.totalRecords = 0;
    this._subscriptions = [];
    this.inputFilter = { column: 'rowId', dynamicCols: 0, enablePagination: 1, page: 1, perPage: 150, sort: 'desc', searchString: '' };
    
    this._gridContext.filter$.subscribe(filter => {
      this._filterGridData({
        ...this.inputFilter,
        searchString: filter.searchString
      });
    });
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

  handleRowClick(customer: ICustomer) {
    this._dialogContext.open(CustFormComponent, {
      data: { ...customer },
      autoFocus: false
    })
  }

  private _filterGridData(input: ICustomerFilter) {
    this.loading = true;
    this._subscriptions.push(
      this._gridContext.customer.loadCustomers(input)
        .pipe(map(catchError => {
          this.dataSource = new MatTableDataSource();
          this.totalRecords = 0;
          this.loading = false;
          return catchError;
        }))
        .subscribe(response => {
          this.loading = false;
          this.dataSource = new MatTableDataSource(response.rows);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          this.displayedColumns = response.columns;
        })
    );
  }

}
