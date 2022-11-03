import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMatModule } from './ng-mat.module';
import { HttpClientModule } from '@angular/common/http';
import { FilePathHandlerPipe } from './pipes';
import { PreventSpaceDirective } from './directives/prevent-space.directive';

@NgModule({
  declarations: [FilePathHandlerPipe, PreventSpaceDirective],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMatModule,
    HttpClientModule,
    FilePathHandlerPipe,
    PreventSpaceDirective
  ]
})
export class SharedModule { }
