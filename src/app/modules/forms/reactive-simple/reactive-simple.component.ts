import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { CustomerFormService, CustomerService } from 'src/app/services';

@Component({
  selector: 'app-reactive-simple',
  templateUrl: './reactive-simple.component.html',
  styleUrls: ['./reactive-simple.component.scss']
})
export class ReactiveSimpleComponent implements OnInit {

  customerForm: FormGroup;
  displayMessage: { [key: string]: string } = {};
  savingFormData: boolean = false;

  constructor(
    public formContext: CustomerFormService,
    private _customerContext: CustomerService,
    private _matSnackbarContext: MatSnackBar
  ) {
    this.customerForm = this.formContext.initStaticCustomerForm();
  }


  ngOnInit(): void {
    this.customerForm.valueChanges
      .pipe(debounceTime(100))
      .subscribe(model => {
        this.displayMessage = this.formContext.processMessages(this.customerForm);
      });
  }

  validate(groupName: string, controlName: string) {
    const control = this.customerForm.get(groupName)?.get(controlName);
    return control?.touched && control.dirty && control.valid;
  }

  saveForm() {
    this.savingFormData = true;
    this._customerContext.saveCustomer(this.customerForm.value)
      .pipe(catchError(error => {
        this.savingFormData = false;
        this._matSnackbarContext.open(error);
        throw new Error(error);
      }))
      .subscribe((response: any) => {
        this.savingFormData = false;
        this._matSnackbarContext.open(response.message);
      })
  }

}
