import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { debounceTime, lastValueFrom, map, Observable } from 'rxjs';
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
    },
    {
      provide: NG_VALIDATORS,
      useExisting: CustomerSelectComponent,
      multi: true
    }
  ]
})
export class CustomerSelectComponent implements OnInit, ControlValueAccessor, Validator {

  constructor(private _customerContext: CustomerService) { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (this._customers.length && this._customers.findIndex(c => c.custName === this._custName) < 0) return { invalidCustomer: true };
    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {

  }

  @Input('type') type: string = 'SELECT';
  customers$: Observable<ICustomer[]> = new Observable();
  disabled: boolean = false;
  private _customers: ICustomer[] = [];
  private _custName: any = '';
  private _onChange = (value: any | null) => undefined;
  private _onTouched = () => { };

  get custName() {
    return this._custName;
  }
  set custName(value: any) {
    this._custName = value;
    this._onChange(this._custName);
    this._onTouched();
  }

  writeValue(obj: any): void {
    if (obj) {
      this._custName = obj;
    }
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
    this._filterCustomer(new CustomerFilter({ searchString: '', perPage: 20 }));
    this._getCustomers();
  }

  private async _getCustomers() {
    const customers = await lastValueFrom(this.customers$);
    this._customers = customers;
  }

  private _filterCustomer(input: ICustomerFilter) {
    this.customers$ = this._customerContext.loadCustomers(input).pipe(map(grid => grid.rows));
  }
}
