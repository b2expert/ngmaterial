import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  formTypeId: string = '1';
  constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {
    this.formTypeId = this._activatedRoute.snapshot.queryParams['option'] || '1';
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

}
