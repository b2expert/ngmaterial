import { Observable } from "rxjs";

export interface IProduct {
    name: string;
    model: string;
    price: number;
    qty: number;
    image: string;
    specifications: { [key: string]: string };
    loadProducts(): Observable<IProduct[]>;
}

export interface ICart {
    products: IProduct[];
    totalAmount: number;
    deleteProduct(product: IProduct): void;
    addToCart(product: IProduct): void;
}

export class Product implements Partial<IProduct> {

    loadProducts(): Observable<IProduct[]> {
        throw new Error("Method not implemented.");
    }

}

export class Cart implements ICart {

    constructor() {
        this.products = [];
    }

    products: IProduct[];

    get totalAmount() {
        return this.products.reduce((total: number, nextProd: IProduct) => {
            return total + nextProd.price * nextProd.qty;
        }, 0);
    }

    addToCart(product: IProduct): void {
        if (!this.products.includes(product)) {
            this.products.push(product);
        } else {
            const prod = this.products.find(p => p.name === product.name);
            if (prod)
                prod.qty++;
        }
    }

    deleteProduct(product: IProduct): void {
        this.products = [...this.products.filter(p => p.name !== product.name)]
    }
}