import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs';
import { CustomerData, ICustomerData } from 'src/app/models';
import { CustomerService } from 'src/app/services';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  inputModel: ICustomerData = new CustomerData();
  savingFormData: boolean = false;

  constructor(
    private _customerContext: CustomerService,
    private _matSnackbarContext: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  saveForm() {
    this.savingFormData = true;
    this._customerContext.saveCustomer(this.inputModel)
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
