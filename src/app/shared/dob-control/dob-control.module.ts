import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DobControlComponent } from './dob-control.component';
import { NgMatModule } from 'src/app/ng-mat.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DobControlComponent
  ],
  exports: [
    DobControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMatModule
  ]
})
export class DobControlModule { }
