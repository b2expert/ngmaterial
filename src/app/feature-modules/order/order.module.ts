import { NgModule } from '@angular/core';
import { OrderFilterComponent } from './order-filter/order-filter.component';
import { OrderListComponent } from './order-list/order-list.component';
import { SharedModule } from 'src/app/shared.module';
import { CustomerModule } from '../customer';

const commonClass = [
  OrderFilterComponent,
  OrderListComponent
];

@NgModule({
  declarations: [...commonClass],
  exports: [...commonClass],
  imports: [
    SharedModule,
    CustomerModule
  ]
})
export class OrderModule { }
