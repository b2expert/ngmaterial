import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, map, Observable } from 'rxjs';
import { Customer, CustomerFilter, ICustomer, ICustomerFilter } from 'src/app/pages/data-grid/data-grid.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-select',
  templateUrl: './customer-select.component.html',
  styleUrls: ['./customer-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomerSelectComponent,
      multi: true
    }
  ]
})
export class CustomerSelectComponent implements OnInit, ControlValueAccessor {

  constructor(private _customerContext: CustomerService) { }

  writeValue(obj: any): void {
  }

  private _onChange = (value: any | null) => undefined;
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
  }
  setDisabledState?(isDisabled: boolean): void {
  }

  customers$: Observable<ICustomer[]> = new Observable();
  private _customer: ICustomer = new Customer();

  get customer() {
    return this._customer;
  }
  set customer(value: ICustomer) {
    this._customer = value;
    this._onChange(this._customer);
  }

  ngOnInit(): void {
    this._filterCustomer(new CustomerFilter({ searchString: '', perPage: 20 }));
  }

  private _filterCustomer(input: ICustomerFilter) {
    this.customers$ = this._customerContext.loadCustomers(input).pipe(map(grid => grid.rows));
  }
}
