import { Component, OnInit } from "@angular/core";
// import the interface
import { IProduct } from "./products";

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "product List";
  imageWidth: number = 50;
  imagemargin: number = 2;
  showImage: boolean = true;

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

  filteredProducts: IProduct[];

  products: IProduct[] = [
    {
      productId: 1,
      productName: "Leaf Rake",
      productCode: "GDN-0011",
      releaseDate: "March 19, 2019",
      description: "Leaf rake with 48-inch wooden handle.",
      price: 19.95,
      starRating: 3.2,
      imageUrl: "assets/images/leaf_rake.png"
    },
    {
      productId: 2,
      productName: "Garden Cart",
      productCode: "GDN-0023",
      releaseDate: "March 18, 2019",
      description: "15 gallon capacity rolling garden cart",
      price: 32.99,
      starRating: 4.2,
      imageUrl: "assets/images/garden_cart.png"
    }
  ];
  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = "cart";
  }
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

  ngOnInit() {
    console.log("from onInit");
  }
}
