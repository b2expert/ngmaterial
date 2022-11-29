import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CustomerFormService } from 'src/app/feature-modules/customer';
import { ICountry, IState } from 'src/app/models';
import { CountryStateCityService } from 'src/app/services';

@Component({
  selector: 'app-reactive-array',
  templateUrl: './reactive-array.component.html',
  styleUrls: ['./reactive-array.component.scss']
})
export class ReactiveArrayComponent implements OnInit {

  customerForm: FormGroup;
  countries$: Observable<ICountry[]> = new Observable();
  states$: Observable<IState[]> = new Observable();
  private _removeSubs = new Subject();

  constructor(
    public formContext: CustomerFormService,
    public cscContext: CountryStateCityService
  ) {
    this.customerForm = formContext.initStaticArrayFormExample();
  }

  ngOnInit(): void {
    this.countries$ = this.cscContext.loadCountries();
    this._registerGroupChange();
  }

  private _registerGroupChange() {
    this.customerForm.valueChanges.subscribe(group => {

      this._removeSubs.next(null); // Capture next event

      Object.keys(group).forEach(key => {
        if (key.includes('addresses'))
          this.addresses.controls.forEach((address: any, index: number) => this._registerEveryControl(address.controls, index));
        else {
          const controlGrp = this.customerForm.get(key) as FormGroup;
          this._registerEveryControl(controlGrp.controls);
        }
      });
    })
  }

  private _registerEveryControl(controls: any, index?: number) {
    Object.keys(controls).forEach(controlKey => {
      const control = controls[controlKey] as AbstractControl;
      control.valueChanges.pipe(takeUntil(this._removeSubs)).subscribe(value => this._onControlChange(value, controlKey, index));
    });
  }

  private _onControlChange(data: any, controlKey: string, index?: number) {
    if (controlKey.includes('country')) {
      this.addresses.at(index || 0).get('state')?.patchValue('');
      this.states$ = this.cscContext.loadStates(data.id);
    }
  }

  get addresses() {
    return this.customerForm.get('addresses') as FormArray;
  }

  handleFormSubmit() {
    console.info(this.customerForm.getRawValue());
  }

  addAddress() {
    this.addresses.push(this.formContext.addAddressGroup());
  }

  removeAddress(rowIndex: number) {
    this.addresses.removeAt(rowIndex);
  }

  displayCountryName(row: ICountry) {
    return row.name;
  }

  displayStateName(row: IState) {
    return row.name;
  }

}
