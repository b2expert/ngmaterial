import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-ecart',
  templateUrl: './ecart.component.html',
  styleUrls: ['./ecart.component.scss']
})
export class EcartComponent implements OnInit {

  products$: Observable<IProduct[]> = new Observable();

  constructor(public productContext: ProductService) { }

  ngOnInit(): void {
    this.products$ = this.productContext.loadProducts();
  }

}
