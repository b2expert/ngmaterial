import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameControlComponent } from './name-control.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [
    NameControlComponent
  ],
  exports: [
    NameControlComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NameControlModule { }
