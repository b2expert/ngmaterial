import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICustomer } from '../../data-grid.model';

@Component({
  selector: 'app-cust-form',
  templateUrl: './cust-form.component.html',
  styleUrls: ['./cust-form.component.scss']
})
export class CustFormComponent implements OnInit {

  private _actualCustomer!: ICustomer;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: ICustomer) { }

  ngOnInit(): void {
    this._actualCustomer = { ...this.dialogData };
  }

  handleFormSubmit() {
    
  }

  handleResetClick() {
    this.dialogData = { ...this._actualCustomer };
  }
}
