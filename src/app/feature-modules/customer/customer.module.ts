import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { CustomerSelectComponent } from './customer-select/customer-select.component';

const commonClass = [CustomerSelectComponent];

@NgModule({
  declarations: [...commonClass],
  exports: [...commonClass],
  imports: [
    SharedModule
  ]
})
export class CustomerModule { }
