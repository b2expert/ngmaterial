import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { CustomerService } from 'src/app/services';
import { CustomerFilter, ICustomer } from '../../data-grid/data-grid.model';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  constructor(private _customerContext: CustomerService) {
  }

  customers$: Observable<ICustomer[]> = new Observable();
  selectedCustomers: ICustomer[] = [];
  searchCtrl: FormControl = new FormControl();

  ngOnInit(): void {
    this.searchCtrl.valueChanges
      .pipe(map(value => typeof value === 'object' ? '' : ''), startWith(''))
      .subscribe(value => {
        this.customers$ = this._customerContext
          .loadCustomers(new CustomerFilter({ searchString: value, perPage: 20 }))
          .pipe(map(c => c.rows))
      })
  }

  onOptionSelect(e: MatAutocompleteSelectedEvent) {
    const customer = e.option.value as ICustomer;
    if (this.selectedCustomers.findIndex(c => c.rowId === customer.rowId) < 0)
      this.selectedCustomers.push(customer);
    else 
      this.removeCustomer(customer);
  }

  removeCustomer(customer: ICustomer) {
    this.selectedCustomers = [...this.selectedCustomers.filter(c => c.rowId !== customer.rowId)];
  }

  checkSelectedCustomer(customer: ICustomer) {
    return this.selectedCustomers.findIndex(c => c.rowId === customer.rowId) > -1;
  }

}

