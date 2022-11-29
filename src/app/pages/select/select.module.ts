import { NgModule } from '@angular/core';
import { SelectComponent } from './select.component';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ChipComponent } from './chip/chip.component';
import { ChipWithTriggerComponent } from './chip-with-trigger/chip-with-trigger.component';
import { SelectWithModelComponent } from './select-with-model/select-with-model.component';
import { CustomerService } from 'src/app/feature-modules/customer';

@NgModule({
  declarations: [
    SelectComponent,
    AutocompleteComponent,
    ChipComponent,
    ChipWithTriggerComponent,
    SelectWithModelComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: SelectComponent}])
  ],
  providers: [CustomerService]
})
export class SelectModule { }
