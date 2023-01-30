import { Directive, ElementRef, TemplateRef, ViewContainerRef } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { AppValidator } from "../models";

@Directive({
    selector: '[emailValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: EmailValidatorDirective,
        multi: true
    }]
})
export class EmailValidatorDirective implements Validator {

    constructor(
        private _elementRef: ElementRef<any>,
        private _viewContainer: ViewContainerRef,
    ) { }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        return AppValidator.emailValidator()(control);
    }
    registerOnValidatorChange?(fn: () => void): void {
    }

}