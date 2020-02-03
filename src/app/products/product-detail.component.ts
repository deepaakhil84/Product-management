import { Component, OnInit } from "@angular/core";
import { IProduct } from "./products";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from './product.service';

@Component({
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;
  products: IProduct[];


  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get("id");
    this.pageTitle += `: ${id}`;

    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
    })
  }
  onBack(): void {
    this.router.navigate(["/products"]);


  }
}



  // + symbol is javascript to convert the string into a numeric ID

  // this.product = {
  //   productId: id,
  //   productName: "Garden Cart",
  //   productCode: "GDN-0023",
  //   releaseDate: "March 18, 2019",
  //   description: "15 gallon capacity rolling garden cart",
  //   price: 32.99,
  //   starRating: 4.2,
  //   imageUrl: "assets/images/garden_cart.png"
  // };

//method to navigate back to the productlist component
