import { environment } from "src/environments/environment";

export class EndPoint {
    
    protected _loginUrl: string;
    protected get loginUrl() {
        return this._loginUrl;
    }

    protected _logoutUrl: string;
    protected get logoutUrl() {
        return this._logoutUrl;
    }

    protected _authUserDetailsUrl: string;
    protected get authUserDetailsUrl() {
        return this._authUserDetailsUrl;
    }

    protected _customerListUrl: string;
    protected get customerListUrl() {
        return this._customerListUrl;
    }

    protected _countryListUrl: string;
    protected get countryListUrl() {
        return this._countryListUrl;
    }

    protected _stateListUrl: string;
    protected get stateListUrl() {
        return this._stateListUrl;
    }

    protected _cityListUrl: string;
    protected get cityListUrl() {
        return this._cityListUrl;
    }

    protected _formElementsUrl: string;
    protected get formElementsUrl() {
        return this._formElementsUrl;
    }

    constructor() {
        this._loginUrl = environment.apiBaseUrl + 'lesssecure/account/login';
        this._logoutUrl = environment.apiBaseUrl + 'secure/user/logout';
        this._authUserDetailsUrl = environment.apiBaseUrl + 'secure/user/basic/details';
        this._customerListUrl = environment.apiBaseUrl + 'secure/customer/list';
        this._countryListUrl = '/assets/dummycontents/countries.json';
        this._stateListUrl = '/assets/dummycontents/states.json';
        this._cityListUrl = '/assets/dummycontents/cities.json';
        this._formElementsUrl = environment.apiBaseUrl + 'secure/customer/form';
    }
}