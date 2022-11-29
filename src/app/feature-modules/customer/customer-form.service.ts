import { Injectable } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { map } from "rxjs";
import { AppForm, dobValidator, MessageValidator } from "../../models";
import { CustomerService } from "./customer.service";

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

@Injectable({ providedIn: 'root' })
export class CustomerFormService extends AppForm {

    constructor(public override _fb: FormBuilder, public customerContext: CustomerService) {
        super(_fb);
    }

    //#region Static Form Context
    get staticInfos() {
        return STATIC_INFOS;
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

    initStaticArrayFormExample() {
        return this._fb.group({
            names: this._fb.group({
                firstName: this._fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
                middleName: this._fb.control('', [Validators.minLength(3), Validators.maxLength(20)]),
                lastName: this._fb.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
            }),
            addresses: this._fb.array([this.addAddressGroup()])
        })
    }

    addAddressGroup() {
        return this._fb.group({
            country: this._fb.control('', [Validators.required]),
            state: this._fb.control('', [Validators.required]),
            city: this._fb.control('', [Validators.required]),
        })
    }
    //#endregion

    //#region Dynamic Form(Meta data driven)
    errorMessages: { [key: string]: string } = {};
    formElements: any[] = [];

    initDynamicForm() {
        return this.customerContext.loadForm().pipe(map(elements => {
            this.formElements = elements;

            // TODO: Load reference data if any
            this.formElements.forEach(element => {
                if(element.dataRef && !element.dElement) {
                    this._assignControlOptions(element, '');
                }
            });

            // TODO: Fetch and assign options on load if any            
            return this.build(elements, this.onControlChange);
        }));
    }

    onControlChange(groupKey: string, element: any, value: any, index: number) {
        if (this?.form)
            this.errorMessages = this.processMessages(this.form);

        // TODO: Fetch control reference list on control change for dependant control
        if (value) {
            const depandantElement = this.formElements.find(el => el.dElement === element.attrName);
            if (depandantElement) {
                // TODO: Update value with null
                this.form.controls[groupKey].get(depandantElement.attrName)?.patchValue('');
                this._assignControlOptions(depandantElement, value);
            }
        }
    }

    private _assignControlOptions(element: any, param: any) {
        let dataPath = `${element.dataRef}`;
        if (param && element.dataRef.includes('{rowId}')) { // Dependant path
            dataPath = element.dataRef.replace('{rowId}', param.rowId);
        }
        this.customerContext.loadReferenceOptions(dataPath)
            .subscribe(options => {
                element.options = options;
            });
    }
    //#endregion
}