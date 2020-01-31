import { Component } from "@angular/core";

//component Decorator
@Component({
  //component metadata
  selector: "pm-root",
  //define template
  template: `
    <nav class="navbar navbar-expand navbar-light bg-light">
      <a class="navbar-brand">{{ pageTitle }}</a>
      <ul class="nav nav-pills">
        <li>
          <a class="nav-link" [routerLink]="['/welcome']">HOME</a>
        </li>
        <li>
          <a class="nav-link" [routerLink]="['/products']">Product List</a>
        </li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = "Product Management";
}
