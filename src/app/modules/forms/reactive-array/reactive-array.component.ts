import { Component, OnInit } from '@angular/core';
import { CountryStateCityService, CustomerFormService } from 'src/app/services';

@Component({
  selector: 'app-reactive-array',
  templateUrl: './reactive-array.component.html',
  styleUrls: ['./reactive-array.component.scss']
})
export class ReactiveArrayComponent implements OnInit {

  constructor(
    public formContext: CustomerFormService,
    public cscContext: CountryStateCityService
  ) { }

  ngOnInit(): void {
  }

  handleFormSubmit() {
    
  }

}
