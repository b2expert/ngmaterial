import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { EndPoint } from "src/app/models";
import { AppHttpService, UtilityService } from "src/app/services";
import { ICustomerFilter, IGrid } from "./data-grid.model";

@Injectable()
export class DataGridService extends EndPoint {

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
        return this._httpClient
            .get(`${this.customerListUrl}?${this.utilityContext.serialize(input)}`)
            .pipe(map(apiResponse => {
                this._customerGridData = apiResponse.data as IGrid;
                return this._customerGridData;
            }));
    }
}