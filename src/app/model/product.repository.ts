import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private category: string[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.category = data
        .map(_ => _.category)
        .filter((c, index, arr) => arr.indexOf(c) == index)
        .sort();
    });
  }

  getProducts(category: string = null): Product[] {
    return this.products.filter(
      _ => category == null || category == _.category
    );
  }

  getProduct(id: number): Product {
    return this.products.find(_ => id == _.id);
  }

  getCategories(): string[]{
      return this.category;
  }
}
