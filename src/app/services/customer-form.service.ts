import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { dobValidator, MessageValidator } from "../models";

const REGEX_PATTERNS = {
    email: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
    INMobile: '^[6-9]{1}[0-9]{9}$',
    INLandNum: '^[0][1-9]{2}(-)[0-9]{8}$'
}

const STATIC_INFOS = {
    firstName: 'Enter a valid first name(e.g Samplefirstname)',
    middleName: 'Enter a valid middle name(e.g Kumar)',
    lastName: 'Enter a valid last name(e.g Rana/ Mandal etc)',
    mobileNo: 'Enter a valid indian mobile number, starts with 6/7/8/9',
    phoneNo: 'Enter a valid land number(format: {STD code-8 digit positive number})',
    email: 'Enter a valid email(format: {example.subname@domain.com/in/org etc})',
    dob: 'Enter a valid dob(e.g DOB must be greater than or euqal to 18yrs as of current date)'
}

@Injectable({providedIn: 'root'})
export class CustomerFormService extends MessageValidator {

    get staticInfos() {
        return STATIC_INFOS;
    }
    
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
                dob: this._fb.control('', [Validators.required, dobValidator]),
            })
        })
    }
}