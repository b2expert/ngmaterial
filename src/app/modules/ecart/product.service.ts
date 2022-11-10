import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { AppHttpService } from "src/app/services";
import { IProduct, Product } from "./product.model";

@Injectable()
export class ProductService extends Product {
    
    constructor(private _httpContext: AppHttpService) {
        super();
    }

    override loadProducts(): Observable<IProduct[]> {
        return this._httpContext.get('assets/dummycontents/products.json')
        .pipe(map(apiResponse => apiResponse.data as IProduct[]));
    }
}