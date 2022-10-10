import { AbstractControl } from "@angular/forms";

function escapeRegExp(input: string) {
    return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export function dobValidator(control: AbstractControl) {
    if (control.value) {
        const dob = new Date(control.value.replace(new RegExp(escapeRegExp('-'), 'g'), ' '));
        const diff_ms = Date.now() - dob.getTime();
        const age_dt = new Date(diff_ms);
        const years = Math.abs(age_dt.getUTCFullYear() - 1970);
        const invalidDOB = years < 18;
        if (invalidDOB) return { invalidDOB: { actualValue: control.value, ageAsOnDate: years } };
    }
    return null;
}