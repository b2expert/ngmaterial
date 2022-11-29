import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input('product') inputProduct!: IProduct;
  
  constructor() { }

  ngOnInit(): void {
  }

}
