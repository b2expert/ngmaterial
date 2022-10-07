import { NgModule } from '@angular/core';
import { SelectComponent } from './select.component';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CustomerService } from 'src/app/services';
import { ChipComponent } from './chip/chip.component';
import { ChipWithTriggerComponent } from './chip-with-trigger/chip-with-trigger.component';

@NgModule({
  declarations: [
    SelectComponent,
    AutocompleteComponent,
    ChipComponent,
    ChipWithTriggerComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: SelectComponent}])
  ],
  providers: [CustomerService]
})
export class SelectModule { }
