import { Component } from "@angular/core";

//component Decorator
@Component({
  //component metadata
  selector: "pm-root",
  //define template
  template: `
    <div>
      <h1>{{ pageTitle }}</h1>
      
      <pm-products></pm-products>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = "Product Management";
}
