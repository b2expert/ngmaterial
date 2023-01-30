import { AbstractControl } from "@angular/forms";
import { APP_CONSTS } from "./app.const";

export const escapeRegExp = (input: string) => {
    return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export class AppValidator {

    /**
     * 
     * @param cutOffPastYear 1970
     * @param ageToCheck 18
     * @returns validatorFun
     */
    static dobValidator = (cutOffPastYear: number = 1970, ageToCheck: number = 18) => {
        return (control: AbstractControl) => {
            if (control.value) {
                const dob = new Date(control.value.replace(new RegExp(escapeRegExp('-'), 'g'), ' '));
                const diff_ms = Date.now() - dob.getTime();
                const age_dt = new Date(diff_ms);
                const years = Math.abs(age_dt.getUTCFullYear() - cutOffPastYear);
                const invalidDOB = years < ageToCheck;
                if (invalidDOB) return {
                    invalidDOB: { actualValue: control.value, ageAsOnDate: years, message: `Age must be equal or greater than ${ageToCheck} till date` }
                };
            }
            return null;
        };
    }

    static emailValidator() {
        return (control: AbstractControl) => {
            if (control.value) {
                const valid: boolean = new RegExp(APP_CONSTS.emailRegex).test(control.value);
                if (!valid) return { invalidEmail: true, message: 'Invalid email address!' };
            }
            return null;
        }
    }

    static phoneValidator() {
        return (control: AbstractControl) => {
            if (control.value) {
                const valid: boolean = APP_CONSTS.phoneRegex.test(control.value);
                if (!valid) return { invalidPhone: true, message: 'Invalid phone number!', hints: 'Phone number format must be like {STD code}-{8 digit positive number} (e.g : 033-23459876/ 080-34567654/ 022-85233654 etc.' };
            }
            return null;
        }
    }
}