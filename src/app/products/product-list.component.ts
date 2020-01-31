import { Component, OnInit } from "@angular/core";
// import the interface

import { IProduct } from "./products";
import { ProductService } from "./product.service";

@Component({
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "product List";
  imageWidth: number = 50;
  imagemargin: number = 2;
  showImage: boolean = true;
  errorMessage: string;

  //setting and getting the value for searching
  _listFilter: string;

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }
  get listFilter(): string {
    return this._listFilter;
  }
  //delete the hard coded product from the array to call from service

  filteredProducts: IProduct[];
  products: IProduct[] = [];

  //3.injecting the service to the component

  constructor(private productService: ProductService) {}

  //pass the value from the child component to the container

  onRatingClicked(message: string): void {
    this.pageTitle = "product List :" + message;
  }

  //filtering a word from a text box=>default properties in to the constructor

  performFilter(filterby: string): IProduct[] {
    filterby = filterby.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => {
      const filteredProduct =
        product.productName.toLocaleLowerCase().indexOf(filterby) != -1;
      return filteredProduct;
    });
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  //calling the service
  //subscribing an observable
  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        error: err => (this.errorMessage = err);
        this.filteredProducts = this.products;
      }
    });

    this.listFilter = "";
  }
}
