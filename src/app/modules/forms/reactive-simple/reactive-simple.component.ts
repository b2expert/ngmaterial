import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { CustomerFormService } from 'src/app/services';

@Component({
  selector: 'app-reactive-simple',
  templateUrl: './reactive-simple.component.html',
  styleUrls: ['./reactive-simple.component.scss']
})
export class ReactiveSimpleComponent implements OnInit {

  customerForm: FormGroup;
  displayMessage: { [key: string]: string } = {};

  constructor(public formContext: CustomerFormService) {
    this.customerForm = this.formContext.initStaticCustomerForm();
  }


  ngOnInit(): void {
    this.customerForm.valueChanges
      .pipe(map(debounceTime(100), distinctUntilChanged()))
      .subscribe(model => {
        this.displayMessage = this.formContext.processMessages(this.customerForm);
      });
  }

}
