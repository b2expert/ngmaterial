import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CustomerFormService } from 'src/app/feature-modules/customer';

@Component({
  selector: 'app-reactive-dynamic',
  templateUrl: './reactive-dynamic.component.html',
  styleUrls: ['./reactive-dynamic.component.scss']
})
export class ReactiveDynamicComponent implements OnInit {

  constructor(public formContext: CustomerFormService) { }

  ngOnInit(): void {
    this.formContext.initDynamicForm().subscribe();
  }

  handleOnFormSubmit() {
    console.info(this.formContext.form.getRawValue());
  }

  keyDescOrder = (a: KeyValue<string, any[]>, b: KeyValue<string, any[]>): number => {
    return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  }

  validate(key: string, attrName: string) {
    const control = this.formContext.form.controls[key].get(attrName);
    return control?.dirty && control.valid;
  }
  touched(key: string, attrName: string) {
    const control = this.formContext.form.controls[key].get(attrName);
    return control?.touched;
  }

  displayOptionName(option: any) {
    return option.title;
  }

}
