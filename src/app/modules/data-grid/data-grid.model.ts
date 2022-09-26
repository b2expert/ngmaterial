export interface IGrid {
    totalRows: number;
    totalPages: number;
    rows: ICustomer[];
    columns: string[];
}

export class Grid implements IGrid {
    constructor(input?: IGrid) {
        this.totalRows = input?.totalRows || 0;
        this.totalPages = input?.totalPages || 0;
        this.rows = input?.rows || [];
        this.columns = input?.columns || [];
    }
    totalRows: number;
    totalPages: number;
    rows: ICustomer[];
    columns: string[];
}

export interface ICustomer {
    "rowId": number,
    "custName": string,
    "custCode": string,
    "profilePic": string,
    "mobileNo": string,
    "dob": string,
    "joiningDate": string,
    "totalOrder": number,
    "returned": number,
    "totalAmount": number,
    "todaysOrder": number,
    "last7DaysOrder": number,
    "lastMonthOrder": number,
    "lastYearOrder": number,
    "createdDate": string,
    "createdBy": string
}

export interface ICustomerFilter {
    searchString?: string;
    dynamicCols?: number;
    perPage?: number;
    column?: string;
    sort?: string;
    page?: number;
    enablePagination?: number;
}

/**
 * **Default values are as follows**
 * 
 * Dynamic Column: false
 * 
 * Per page records: 5
 * 
 * Column to be sorted: rowId
 * 
 * Sorting Direction: desc
 * 
 * Current Page: 1
 * 
 * Pagination: true
 */
export class CustomerFilter implements ICustomerFilter {

    constructor(input?: ICustomerFilter) {
        this.searchString = input?.searchString || '';
        this.dynamicCols = input?.dynamicCols || 0;
        this.perPage = input?.perPage || 5;
        this.column = input?.column || 'rowId';
        this.sort = input?.sort || 'desc';
        this.page = input?.page || 1;
        this.enablePagination = input?.enablePagination || 1;
    }

    searchString?: string | undefined;
    dynamicCols: number;
    perPage: number;
    column: string;
    sort: string;
    page: number;
    enablePagination: number;

}