import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { EndPoint, ICity, ICountry, IState } from "../models";

@Injectable({providedIn: 'root'})
export class CountryStateCityService extends EndPoint {

    constructor(private _httpClient: HttpClient) {
        super();
    }

    loadCountries() {
        return this._httpClient.get<ICountry[]>(this.countryListUrl)
    }

    loadStates(countryRowId: number) {
        return this._httpClient.get<IState[]>(this.stateListUrl)
        .pipe(map(list => list.filter(s => +s.countryRowId === countryRowId)));
    }

    loadCities(stateRowId: number) {
        return this._httpClient.get<ICity[]>(this.cityListUrl)
        .pipe(map(list => list.filter(c => c.stateRowId === stateRowId)));
    }

}