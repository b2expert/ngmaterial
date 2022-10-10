import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MessageValidator } from "../models";

const REGEX_PATTERNS = {
    email: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
    INMobile: '^[6-9]{1}[0-9]{9}$',
    INLandNum: '^[0][1-9]{2}(-)[0-9]{8}$'
}

@Injectable({providedIn: 'root'})
export class CustomerFormService extends MessageValidator {

    constructor(private _fb: FormBuilder) {
        super();
    }

    initStaticCustomerForm() {
        return this._fb.group({
            names: this._fb.group({
                firstName: this._fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
                middleName: this._fb.control('', [Validators.minLength(3), Validators.maxLength(20)]),
                lastName: this._fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
            }),
            contacts: this._fb.group({
                mobileNo: this._fb.control('', [Validators.required, Validators.pattern(REGEX_PATTERNS.INMobile)]),
                phoneNo: this._fb.control('', [Validators.pattern(REGEX_PATTERNS.INLandNum)]),
                email: this._fb.control('', [Validators.required, Validators.pattern(REGEX_PATTERNS.email)]),
            }),
            others: this._fb.group({
                dob: this._fb.control('', [Validators.required]),
            })
        })
    }
}