import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { Router, ActivatedRoute } from '@angular/router';
import { AppValidator } from 'src/app/models';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  formTypeId: string = '1';
  customerForm!: FormGroup;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _fb: FormBuilder) {
    this.formTypeId = this._activatedRoute.snapshot.queryParams['option'] || '1';

    //Intiating customer form
    this.customerForm = _fb.group({
      dob1: new FormControl('', [Validators.required, AppValidator.dobValidator()]),
      dob2: new FormControl('', [Validators.required, AppValidator.dobValidator(1980, 20)])
    });
  }

  ngOnInit(): void {
    this.onOptionChange();
  }

  onOptionChange(event?: MatRadioChange) {
    this._router.navigate([], {
      relativeTo: this._activatedRoute,
      queryParams: { option: event?.value ?? this.formTypeId }
    });
  }

  handleReusableControl() {
    console.info(this.customerForm.getRawValue());
  }
}
