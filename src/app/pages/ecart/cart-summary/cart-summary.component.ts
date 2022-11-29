import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../cart.service';
import { MyCartComponent } from '../my-cart/my-cart.component';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {

  constructor(public cartContext: CartService, private _matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  viewMyCart() {
    this._matDialog.open(MyCartComponent, {});
  }

}
