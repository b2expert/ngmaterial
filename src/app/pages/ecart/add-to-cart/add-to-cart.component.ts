import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {

  @Input() product!: IProduct;
  addedToCart: boolean = false;

  constructor(public cartContext: CartService) { }

  ngOnInit(): void {
  }

}
