import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, map, debounceTime, startWith, find } from 'rxjs';
import { CustomerService } from 'src/app/services';
import { CustomerFilter, ICustomer, ICustomerFilter } from '../../data-grid/data-grid.model';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  customers$: Observable<ICustomer[]> = new Observable();
  selectedCustomers: ICustomer[] = [];
  multiSelectCtrl = new FormControl('');

  constructor(private _customerContext: CustomerService) { }

  ngOnInit(): void {
    this.multiSelectCtrl.valueChanges
      .pipe(map(value => typeof value === 'object' ? '' : value || ''), startWith(''), debounceTime(500))
      .subscribe(value => {
        this.customers$ = this._customerContext.loadCustomers(new CustomerFilter({ searchString: value, perPage: 20 })).pipe(map(grid => grid.rows));
      });
  }

  onOptionSelection(event: MatAutocompleteSelectedEvent) {
    const include = this.selectedCustomers.find(customer => customer === event.option.value);
    if (!include) {
      this.selectedCustomers.push(event.option.value);
    }
  }

}
