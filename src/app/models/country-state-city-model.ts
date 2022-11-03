interface IBaseCSC {
    id: number;
    name: string;
}
export interface ICountry extends IBaseCSC {    
    sortname: string;    
    phoneCode: number;
}

export interface IState extends IBaseCSC {
    countryRowId: number;
}

export interface ICity extends IBaseCSC {
    stateRowId: number;
}