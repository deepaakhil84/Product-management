//trying to display all the products through service 1.import
import { Injectable } from "@angular/core";
import { IProduct } from "./products";
//1a.provide instance of HTTp
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

// 2.registering a service with a root injector

@Injectable({
  providedIn: "root"
})
export class ProductService {
  //2a.identify the loccation of the webserver(local json file)

  private productUrl = "api/products/products.json";

  //3a.inject the http server using constructor and we need to define the loccation of the json file
  constructor(private http: HttpClient) { }
  // when we get a response back to a array of products so set it to a observable
  //since we expect a response json file containing an array of product=>
  // set the method to a generic parameter<IProduct[]>
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log("All" + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }


  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `an error occured:$(err.error.message)`;
    } else {
      errorMessage = `server returned code:${err.status} ,error message is:$(err.message)`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
