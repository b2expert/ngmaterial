import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-filter',
  templateUrl: './order-filter.component.html',
  styleUrls: ['./order-filter.component.scss']
})
export class OrderFilterComponent implements OnInit {

  customerName1: string = 'Sample 149 Customer';
  customerName2: string = 'Sample 148 Customer';
  
  custForm: FormGroup = new FormGroup({
    cust1: new FormControl('Sample 150 Customer'),
    cust2: new FormControl('Sample 150 Customer'),
  })

  constructor() { }

  ngOnInit(): void {
  }

  handleOrderFilteration() {
    // console.info(this.customerId);
    // console.info(this.customerCtrl);
    console.info(this.custForm.getRawValue());
  }

}
