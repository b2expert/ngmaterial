import { Injectable } from "@angular/core";
import { delay, map, of } from "rxjs";
import { environment } from "src/environments/environment";
import { EndPoint, ICustomerData } from "../models";
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
                // Mapping cust profile image
                this._customerGridData.rows = this._customerGridData.rows.map((row: any) => {
                    row.profilePic = row.imgSrc;
                    return row;
                });

                return this._customerGridData;
            }));
    }

    loadForm() {
        return this._httpClient.get(this.formElementsUrl).pipe(map(apiResponse => apiResponse.data))
    }

    loadReferenceOptions(dataPath: string) {
        return this._httpClient.get(environment.apiBaseUrl + dataPath).pipe(map(apiResponse => apiResponse.data));
    }

    saveCustomer(input: ICustomerData) {
        return of({id: 1, message: 'Form data got saved!'})
        .pipe(delay(1000))
        // .pipe(map(respose => {
        //     throw new Error("Some custom error!");
        // }))
    }
}
