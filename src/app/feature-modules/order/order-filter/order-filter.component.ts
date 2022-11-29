import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer, ICustomer } from 'src/app/pages/data-grid/data-grid.model';

@Component({
  selector: 'app-order-filter',
  templateUrl: './order-filter.component.html',
  styleUrls: ['./order-filter.component.scss']
})
export class OrderFilterComponent implements OnInit {

  customerControl: FormControl = new FormControl();

  customer: ICustomer = new Customer();

  constructor() { }

  ngOnInit(): void {
  }

  handleOrderFilteration() {
    console.info(this.customerControl.value);
  }

}
