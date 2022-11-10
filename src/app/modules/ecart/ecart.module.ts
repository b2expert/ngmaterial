import { NgModule } from '@angular/core';
import { EcartComponent } from './ecart.component';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule } from '@angular/router';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { ProductComponent } from './product/product.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ProductService } from './product.service';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    EcartComponent,
    CartSummaryComponent,
    MyCartComponent,
    ProductComponent,
    AddToCartComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: EcartComponent}])
  ],
  providers: [
    ProductService,
    CartService
  ]
})
export class EcartModule { }
