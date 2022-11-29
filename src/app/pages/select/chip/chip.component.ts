import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { debounceTime, map, Observable, of, startWith } from 'rxjs';
import { CustomerService } from 'src/app/feature-modules/customer';
import { CustomerFilter, ICustomer } from '../../data-grid/data-grid.model';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  constructor(private _customerContext: CustomerService) {
  }

  @ViewChild(MatAutocompleteTrigger) customTrigger!: MatAutocompleteTrigger;
  @ViewChild(MatAutocomplete) autoCompleteRef!: MatAutocomplete;
  @ViewChild('searchCtrlInput') searchCtrlInput!: ElementRef<any>;

  customers$: Observable<ICustomer[]> = new Observable();
  selectedCustomers: ICustomer[] = [];
  searchCtrl: FormControl = new FormControl();
  private _forceToAPICall: boolean = true;

  ngOnInit(): void {
    this.searchCtrl.valueChanges
      .pipe(map(value => typeof value === 'object' ? '' : value || ''), startWith(''), debounceTime(500))
      .subscribe(value => {
        if (this._forceToAPICall)
          this.customers$ = this._customerContext
            .loadCustomers(new CustomerFilter({ searchString: value, perPage: 20 }))
            .pipe(map(c => c.rows))
      })
  }

  onOptionSelect(e: MatAutocompleteSelectedEvent) {
    this._keepPanelOpen();
    this._forceToAPICall = false;
    const customer = e.option.value as ICustomer;
    if (this.selectedCustomers.findIndex(c => c.rowId === customer.rowId) < 0) {
      this.selectedCustomers.push(customer);
    }
    else
      this.removeCustomer(customer);
  }

  removeCustomer(customer: ICustomer) {
    this.selectedCustomers = [...this.selectedCustomers.filter(c => c.rowId !== customer.rowId)];
    this._keepPanelOpen();
  }

  checkSelectedCustomer(customer: ICustomer) {
    return this.selectedCustomers.findIndex(c => c.rowId === customer.rowId) > -1;
  }

  onInputChange() {
    this._forceToAPICall = true;
  }

  resetPanelOptions() {
    this.searchCtrlInput.nativeElement.value = '';
    this.searchCtrl.setValue(null);
    this._forceToAPICall = true;
    this._keepPanelOpen();
  }

  private _keepPanelOpen() {
    requestAnimationFrame(() => this.customTrigger.openPanel());
  }

  reorderOptions() {
    let newList: ICustomer[] = [...this.selectedCustomers];
    this.autoCompleteRef.options.map(c => c.value).forEach(c => {
      if (this.selectedCustomers.findIndex(sc => sc.rowId === c.rowId) < 0)
        newList.push(c);
    })
    this.customers$ = of(newList);
  }

}

