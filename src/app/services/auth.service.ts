import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, of } from "rxjs";
import { APP_CONSTS, IAuthUser, ILogin } from "../models";
import { EndPoint } from "../models/endpoint.model";
import { AppHttpService } from "./http.service";

@Injectable({ providedIn: 'root' })
export class AuthService extends EndPoint {

    private _user: IAuthUser;
    get user() {
        return this._user;
    }

    get authorize() {
        return localStorage.getItem(APP_CONSTS.loginToken) ? true : false;
    }

    constructor(private _httpClient: AppHttpService) {
        super();
        this._user = { firstName: '', lastName: '', profilePic: '', roleName: '', userCode: '' };
    }

    login(input: ILogin) {
        return this._httpClient.post(this.loginUrl, input);
    }

    logout() {
        return this._httpClient.get(this.logoutUrl);
    }

    loadAuthDetails() {
        if (this._user.userCode) return of(this._user);
        return this._httpClient.get(this.authUserDetailsUrl)
            .pipe(map(response => {
                this._user = response.data as IAuthUser;
                return this._user;
            }))
    }
}