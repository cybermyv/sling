import { Component } from "@angular/core";
import { Product } from "./../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
  selector: "store",
  moduleId: module.id,
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.css"]
})
export class StoreComponent {
  public selectCategory = null;
  public productPerPage = 4;
  public selectPage = 1;

  constructor(private repository: ProductRepository) {}

  get products(): Product[] {
    //  return this.repository.getProducts();
    //return this.repository.getProducts(this.selectCategory);

    let pageIndex = (this.selectPage - 1) * this.productPerPage;

    return this.repository
      .getProducts(this.selectCategory)
      .slice(pageIndex, pageIndex + this.productPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productPerPage = Number(newSize);
    this.changePage(1);
  }

  // get pageNumbers(): number[] {
  //   return Array(
  //     Math.ceil(
  //       this.repository.getProducts(this.selectCategory).length /
  //         this.productPerPage
  //     )
  //   )
  //     .fill(0)
  //     .map((x, i) => i + 1);
  // }

  get pageCounter(): number{
    return Math.ceil(this.repository.getProducts(this.selectCategory).length / this.productPerPage)
  }
}
