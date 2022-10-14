import { FormGroup } from "@angular/forms";

const VALIDATION_KEYS: any = {
    'required': (params: any) => `This field is required`,
    'maxlength': (params: any) => `Maximum ${params.actualLength}/${params.requiredLength} characters are allowed`,
    'minlength': (params: any) => `Minimum ${params.actualLength}/${params.requiredLength} characters are required`,
    'pattern': (params: any) => `Invalid format`,
    'max': (params: any) => `Maximum number should be ${params.max}/${params.actual}`,
    'min': (params: any) => `Minimum number should be ${params.min}/${params.actual}`,
    'whitespace': (params: any) => `White spaces are not allowed`,
    'invalidDOB': (params: any) => `Invalid DOB, Age as on current date: ${params.ageAsOnDate} yrs, required age must be >= 18 yrs`
};

export class MessageValidator {

    constructor() { }

    processMessages(container: FormGroup): { [key: string]: string } {
        const messages: any = {};
        // loop through all the formControls
        for (const controlKey in container.controls) {
            if (container.controls.hasOwnProperty(controlKey)) {
                // get the properties of each formControl
                const control = container.controls[controlKey];
                // If it is a FormGroup, process its child controls.
                if (control instanceof FormGroup) {
                    const childMessages = this.processMessages(control);
                    Object.assign(messages, childMessages);
                } else {
                    // Only validate if there are validation messages for the control
                    messages[controlKey] = '';
                    if ((control.dirty || control.touched) && control.errors) {
                        // loop through the object of errors
                        Object.keys(control.errors).forEach(errorKey => {
                            messages[controlKey] = VALIDATION_KEYS[errorKey](control.errors?.[errorKey])
                        });
                    }
                }
            }
        }
        return messages;
    }
}