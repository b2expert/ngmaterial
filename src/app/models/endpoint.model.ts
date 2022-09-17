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

    constructor() {
        this._loginUrl = environment.apiBaseUrl + 'lesssecure/account/login';
        this._logoutUrl = environment.apiBaseUrl + 'secure/user/logout';
        this._authUserDetailsUrl = environment.apiBaseUrl + 'secure/user/basic/details';
        this._customerListUrl = environment.apiBaseUrl + 'secure/customer/list';
    }
}