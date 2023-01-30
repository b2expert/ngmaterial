import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ArrowElDirective } from 'src/app/directives';
import { KeyBoardService } from 'src/app/services';
import { IProduct } from '../ecart/product.model';
import { ProductService } from '../ecart/product.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  constructor(private _pContext: ProductService, private _keyboardContext: KeyBoardService) {
    this._keyboardContext.init();
    this._keyboardContext.keyBoard.subscribe((res) => {
      this.move(res);
    });
  }


  @ViewChildren(ArrowElDirective) inputs!: QueryList<ArrowElDirective>;
  columns: number = 2;
  products$: Observable<IProduct[]> = new Observable();
  private _products: IProduct[] = [];
  private _product!: IProduct;

  testForm: FormGroup = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      middleName: new FormControl('', []),
      lastName: new FormControl('', [Validators.required])
    }),
    email: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.products$ = this._pContext.loadProducts().pipe(map(products => this._products = products));
  }

  handleProductClick(p: IProduct) {
    this._product = p;
    console.log(this._product);
  }

  move(object: any) {
    const inputToArray = this.inputs.toArray();
    let index = inputToArray.findIndex((x) => x.element == object.element);
    if (index < 0) index = 0;
    else {
      switch (object.action) {
        case 'UP':
          index -= this.columns;
          break;
        case 'DOWN':
          index += this.columns;
          break;
        case 'LEFT':
          index--;
          break;
        case 'RIGTH':
          index++;
          break;
        case 'RIGTH':
          index++;
          break;
      }
    }

    if (index >= 0 && index < this.inputs.length) {
      inputToArray[index].element.focus();
      this._product = this._products[index];
    } 
    if(object.action === 'ENTER') {
      // Handle for hit "Enter"
      this.handleProductClick(this._product);
    }
  }
}
