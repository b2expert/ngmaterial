import { AfterViewInit, Component, Optional, Self } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NgControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-dob-control',
  templateUrl: './dob-control.component.html',
  styleUrls: ['./dob-control.component.scss'],
  providers: []
})
export class DobControlComponent implements ControlValueAccessor {

  dobControl!: FormControl;
  constructor(@Self() @Optional() public ngControl: NgControl) {

    this.ngControl.valueAccessor = this;

    this.dobControl = new FormControl(null);
    this.dobControl.valueChanges.subscribe(value => {
      this._onChange(value);
    });
  }

  public get invalid(): boolean {
    return this.ngControl?.invalid || false;
  }

  public get showError(): boolean {
    if (!this.ngControl) {
      return false;
    }

    const { dirty, touched } = this.ngControl;

    return this.invalid ? (dirty || touched) || false : false;
  }

  writeValue(obj: any): void {
    if (obj)
      this.dobControl.patchValue(obj);
  }

  private _onChange = (value: null | undefined) => undefined;
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }

}
