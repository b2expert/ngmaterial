import { NgModule } from '@angular/core';
import { FormsComponent } from './forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveSimpleComponent } from './reactive-simple/reactive-simple.component';
import { ReactiveArrayComponent } from './reactive-array/reactive-array.component';
import { ReactiveDynamicComponent } from './reactive-dynamic/reactive-dynamic.component';
import { DobControlModule } from 'src/app/shared/dob-control/dob-control.module';

@NgModule({
  declarations: [
    FormsComponent,
    TemplateDrivenComponent,
    ReactiveSimpleComponent,
    ReactiveArrayComponent,
    ReactiveDynamicComponent
  ],
  imports: [
    SharedModule,
    DobControlModule,
    RouterModule.forChild([{path: '', component: FormsComponent}])
  ]
})
export class AppFormsModule { }
