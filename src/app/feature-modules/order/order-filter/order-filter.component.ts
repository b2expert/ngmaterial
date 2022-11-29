import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Customer, ICustomer } from 'src/app/pages/data-grid/data-grid.model';

@Component({
  selector: 'app-order-filter',
  templateUrl: './order-filter.component.html',
  styleUrls: ['./order-filter.component.scss']
})
export class OrderFilterComponent implements OnInit {

  customer: ICustomer = new Customer();
  customerCtrl: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

  handleOrderFilteration() {
    console.info(this.customer);
    console.info(this.customerCtrl);
  }

}
