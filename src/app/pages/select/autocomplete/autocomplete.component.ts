import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, debounceTime } from 'rxjs';
import { CustomerService } from 'src/app/feature-modules/customer';
import { CustomerFilter, ICustomer, ICustomerFilter } from '../../data-grid/data-grid.model';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  constructor(private _customerContext: CustomerService) {
    this.customers$ = new Observable();
    this.selectedCustomers = [];
    this.filterCustomer = new CustomerFilter({ perPage: 20, page: 1 });
    this.searchCtrl = new FormControl('');
  }

  private _timeoutId: any;
  customers$: Observable<ICustomer[]>;
  selectedCustomers: ICustomer[];
  filterCustomer: ICustomerFilter;
  searchCtrl: FormControl;

  ngOnInit(): void {
    this._filterCustomer(this.filterCustomer);

    // Live search using form control
    this.searchCtrl.valueChanges
    .pipe(debounceTime(500))
    .subscribe(value => this._filterCustomer({...this.filterCustomer, searchString: value}));
  }

  displayCustomerName(customer: ICustomer) {
    return customer?.custName;
  }

  //#region Live search with ngModel and javascript event
  onKeyDown() {
    clearTimeout(this._timeoutId);
  }

  onCustomerFilter() {
    this.onKeyDown();
    this._timeoutId = setTimeout(() => this._filterCustomer(this.filterCustomer), 500);
  }
  //#endregion

  private _filterCustomer(input: ICustomerFilter) {
    this.customers$ = this._customerContext.loadCustomers(input).pipe(map(grid => grid.rows));
  }
}
