import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, map } from "rxjs";
import { IApiResponse } from "../models";
import { APP_CONSTS } from "../models/app.const";

@Injectable({ providedIn: 'root' })
export class AppHttpService {

    private _headers = {
        headers: {
            Authorization: '',
        },
    };

    constructor(private _httpClient: HttpClient, private _router: Router) {
    }

    private _handleError(error: HttpErrorResponse) {
        if (error.status === 401)
            this._router.navigate(['session/expired']);
    }

    public get(url: string) {
        this._headers.headers.Authorization = 'Bearer ' + localStorage.getItem(APP_CONSTS.loginToken);
        return this._httpClient.get(url, this._headers)
            .pipe(catchError(error => {
                this._handleError(error);
                throw new Error(error);
            }))
            .pipe(map((apiResponse: any) => apiResponse as IApiResponse));;
    }

    public post(url: string, data: any) {
        this._headers.headers.Authorization = 'Bearer ' + localStorage.getItem(APP_CONSTS.loginToken);
        return this._httpClient.post(url, data, this._headers)
            .pipe(catchError(error => {
                this._handleError(error);
                throw new Error(error);
            }))
            .pipe(map((apiResponse: any) => apiResponse as IApiResponse));
    }

    public put(url: string, data: any) {
        this._headers.headers.Authorization = 'Bearer ' + localStorage.getItem(APP_CONSTS.loginToken);
        return this._httpClient.put(url, data, this._headers)
            .pipe(catchError(error => {
                this._handleError(error);
                throw new Error(error);
            }))
            .pipe(map((apiResponse: any) => apiResponse as IApiResponse));;
    }

    public delete(url: string) {
        this._headers.headers.Authorization = 'Bearer ' + localStorage.getItem(APP_CONSTS.loginToken);
        return this._httpClient.delete(url, this._headers)
            .pipe(catchError(error => {
                this._handleError(error);
                throw new Error(error);
            }))
            .pipe(map((apiResponse: any) => apiResponse as IApiResponse));;
    }
}