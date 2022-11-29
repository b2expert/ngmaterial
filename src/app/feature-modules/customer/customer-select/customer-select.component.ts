import { Component, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
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
      useExisting: forwardRef(() => CustomerSelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CustomerSelectComponent),
      multi: true
    }
  ]
})
export class CustomerSelectComponent implements OnInit, ControlValueAccessor, Validator {

  customers$: Observable<ICustomer[]> = new Observable();
  // public readonly customerCtrl: FormControl = new FormControl();
  private _selectedCustomer: ICustomer = new Customer();

  constructor(private _customerContext: CustomerService) { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return null
  }
  registerOnValidatorChange?(fn: () => void): void {
  }

  get customer() {
    return this._selectedCustomer;
  }
  set customer(value: ICustomer) {
    this._selectedCustomer = value;
    this._onChange(this._selectedCustomer);
  }

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

  ngOnInit(): void {
    this._filterCustomer(new CustomerFilter({ searchString: '', perPage: 20 }));
  }

  private _filterCustomer(input: ICustomerFilter) {
    this.customers$ = this._customerContext.loadCustomers(input).pipe(map(grid => grid.rows));
  }
}
