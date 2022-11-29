import { EventEmitter, Injectable } from "@angular/core";
import { CustomerService } from "src/app/feature-modules/customer";

export interface IDataFilter {
    searchString: string;
}

@Injectable()
export class DataGridService {

    constructor(public customer: CustomerService) {
        this._filter$ = new EventEmitter(true);
    }

    private _filter$: EventEmitter<IDataFilter>;
    get filter$() {
        return this._filter$;
    }
    set filter(value: IDataFilter) {
        this._filter$.next(value);
    }
}