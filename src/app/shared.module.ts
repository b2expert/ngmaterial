import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMatModule } from './ng-mat.module';
import { HttpClientModule } from '@angular/common/http';
import { FilePathHandlerPipe, FileSizeFormatterPipe } from './pipes';
import { ArrowElDirective, EmailValidatorDirective, PhoneValidatorDirective, PreventSpaceDirective } from './directives';

@NgModule({
  declarations: [
    FilePathHandlerPipe,
    FileSizeFormatterPipe,
    PreventSpaceDirective,
    EmailValidatorDirective,
    PhoneValidatorDirective,
    ArrowElDirective
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMatModule,
    HttpClientModule,
    FilePathHandlerPipe,
    FileSizeFormatterPipe,
    PreventSpaceDirective,
    EmailValidatorDirective,
    ArrowElDirective,
    PhoneValidatorDirective
  ]
})
export class SharedModule { }
