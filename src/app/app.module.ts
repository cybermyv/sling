import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";

// import { StaticDataSource } from "./model/static.datasource";
// import { ProductRepository } from "./model/product.repository";
// import { StoreComponent } from './store/store.component';

@NgModule({
  imports: [BrowserModule, StoreModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
  // providers: [StaticDataSource, ProductRepository],
})
export class AppModule {}
