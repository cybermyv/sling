import {Injectable} from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

@Injectable()
export class StaticDataSource {
    private products: Product[]=[
        new Product(1, "P1", "C1", "описание ", 100),
        new Product(2, "P2", "C1", "описание ", 200),
        new Product(3, "P3", "C1", "описание ", 300),
        new Product(4, "P4", "C2", "описание ", 400),
        new Product(5, "P5", "C2", "описание ", 500),
        new Product(6, "P6", "C2", "описание ", 600),
        new Product(7, "P7", "C3", "описание ", 700),
        new Product(8, "P8", "C3", "описание ", 800),
        new Product(9, "P9", "C3", "описание ", 900),
        new Product(10, "P10", "C4", "описание ", 10),
    ];

    getProducts(): Observable<Product[]>{
        return Observable.from([this.products]);
    }
}
