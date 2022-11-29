import { Injectable } from "@angular/core";
import { Cart } from "./product.model";

@Injectable()
export class CartService extends Cart {

    constructor() {
        super();
    }

    
}