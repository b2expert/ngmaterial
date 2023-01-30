import { Component, Input, OnChanges, OnInit, Optional, Self, SimpleChange, SimpleChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-name-control',
  templateUrl: './name-control.component.html',
  styleUrls: ['./name-control.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: NameControlComponent, multi: true },
    { provide: NG_VALIDATORS, useExisting: NameControlComponent, multi: true }
  ]
})
export class NameControlComponent implements OnInit, OnChanges, ControlValueAccessor, Validator {

  constructor(private _fb: FormBuilder, @Self() @Optional() public ngControl: NgControl) {
    // this.ngControl.valueAccessor = this;
    // this.nameGroupControl = _fb.group({
    //   firstName: _fb.control(''),
    //   middleName: _fb.control(''),
    //   lastName: _fb.control(''),
    // });
  }
  
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    // this.nameGroupControl = control;
    return { invalid: this._isControlInvalid(control) };
  }
  registerOnValidatorChange?(fn: () => void): void {

  }

  // @Input('formGroupName')
  nameGroupControl: FormGroup = new FormGroup({});

  writeValue(obj: any): void {

  }

  private _onChange = (value: any) => undefined;
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  setDisabledState?(isDisabled: boolean): void {

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes && changes['nameGroupControl'].currentValue) 
      this.nameGroupControl = changes['nameGroupControl'].currentValue;
  }

  private _isControlInvalid(control: AbstractControl) {
    return Object.keys(control.errors as Object).length > 0;
  }
}
