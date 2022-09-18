export interface IGrid {
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
    dynamicCols: number;
    perPage: number;
    column: string;
    sort: string;
    page: number;
    enablePagination: number;
}