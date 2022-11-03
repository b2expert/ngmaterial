import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MessageValidator } from "./message-validator";

interface IForm {
    form: FormGroup;
    elements: { [key: string]: any[] };
    build(elements: any[], ctrlChangeFun: any): FormGroup;
}

export class AppForm extends MessageValidator implements IForm {

    constructor(public _fb: FormBuilder) {
        super();
    }

    elements!: { [key: string]: any[]; };
    form!: FormGroup<any>;
    build(elements: any[], ctrlChangeFun: any): FormGroup<any> {
        this.elements = this._groupByKey(elements, 'parent');
        let formGroup: any = {};
        Object.keys(this.elements).forEach(key => {
            formGroup[key] = this._createControlGroup(this.elements[key], key);
        });
        this.form = this._fb.group(formGroup);
        this._ctrlChangeFun = ctrlChangeFun;
        return ctrlChangeFun(this._ctrlChangeFun);
    }

    private _ctrlChangeFun = (groupKey: string = '', element: any = null, value: any = null, index: number = 0) => {
        
    };

    private _groupByKey(elements: any[], groupKey: string) {
        const groupByParent = elements.reduce((group: any, element: any) => {
            let key = element[groupKey];
            group[key] = group[key] ?? [];
            group[key].push(element);
            return group;
        }, {});
        return groupByParent;
    }

    private _createControlGroup(elements: any[], key: string) {
        const group = this._fb.group({});
        elements.forEach(element => {
            const control = this._fb.control(element.attrValue, this._buildValidationArray(element.validations));
            group.addControl(element.attrName, control);
            control.valueChanges.subscribe(value => this._ctrlChangeFun(key, element, value, 0));
        });
        return group;
    }

    private _buildValidationArray(validation: any) {
        const validations = [];
        if (validation.required)
            validations.push(Validators.required);
        if (validation.minLength)
            validations.push(Validators.minLength(validation.minLength));
        if (validation.maxLength)
            validations.push(Validators.maxLength(validation.maxLength));
        if (validation.formula)
            validations.push(Validators.pattern(validation.formula));
        return validations;
    }

}