import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { SharedModule } from 'src/app/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveSimpleComponent } from './reactive-simple/reactive-simple.component';
import { ReactiveArrayComponent } from './reactive-array/reactive-array.component';



@NgModule({
  declarations: [
    FormsComponent,
    TemplateDrivenComponent,
    ReactiveSimpleComponent,
    ReactiveArrayComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', component: FormsComponent}])
  ]
})
export class AppFormsModule { }
