import { NgModule } from '@angular/core';

import { OrderPageComponent } from './order-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared.module';
import { OrderModule } from 'src/app/feature-modules/order';

@NgModule({
  declarations: [
    OrderPageComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: OrderPageComponent }]),
    OrderModule
  ]
})
export class OrderPageModule { }
