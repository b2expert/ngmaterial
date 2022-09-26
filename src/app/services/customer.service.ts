import { Injectable } from "@angular/core";
import { map, of } from "rxjs";
import { EndPoint } from "../models";
import { IGrid, ICustomerFilter, Grid } from "../modules/data-grid/data-grid.model";
import { AppHttpService } from "./http.service";
import { UtilityService } from "./utility.service";

@Injectable({providedIn: "root"})
export class CustomerService extends EndPoint {
    
    private _customerGridData: IGrid;
    get customerGridData() {
        return this._customerGridData;
    }

    constructor(
        private _httpClient: AppHttpService,
        public utilityContext: UtilityService
    ) {
        super();
        this._customerGridData = { columns: [], rows: [], totalPages: 0, totalRows: 0 };
    }

    loadCustomers(input: ICustomerFilter) {
        if(!input) return of(new Grid());
        return this._httpClient
            .get(`${this.customerListUrl}?${this.utilityContext.serialize(input)}`)
            .pipe(map(apiResponse => {
                this._customerGridData = apiResponse.data as IGrid;
                return this._customerGridData;
            }));
    }
}
