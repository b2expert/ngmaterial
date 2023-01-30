import { Directive, ElementRef, HostListener, TemplateRef, ViewContainerRef } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { AppValidator } from "../models";

@Directive({
    selector: '[phoneValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PhoneValidatorDirective,
        multi: true
    }]
})
export class PhoneValidatorDirective implements Validator {

    constructor(
        private _elementRef: ElementRef<any>,
        private _viewContainer: ViewContainerRef,
    ) { }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        return AppValidator.phoneValidator()(control);
    }
    registerOnValidatorChange?(fn: () => void): void {
    }

    @HostListener('input', ['$event'])
    patchValue(event: KeyboardEvent) {
        const input = event.target as HTMLInputElement;
        let trimmed = input.value.replace(/\s+/g, '');
        let numbers = [];
        if (input.value) {
            trimmed = trimmed.replace('-', '');
            for (let i = 0; i <= trimmed.length; i += trimmed.length) {
                numbers.push(trimmed.substring(i, 3));
            }
        }

        input.value = numbers.join('-');
    }
}