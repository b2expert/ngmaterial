import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMatModule } from './ng-mat.module';
import { HttpClientModule } from '@angular/common/http';
import { FilePathHandlerPipe } from './pipes';

@NgModule({
  declarations: [FilePathHandlerPipe],
  exports: [
    CommonModule,
    FormsModule,
    NgMatModule,
    HttpClientModule,
    FilePathHandlerPipe
  ]
})
export class SharedModule { }
