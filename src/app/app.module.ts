import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StaticDataSource } from "./model/static.datasource";
import { ProductRepository } from "./model/product.repository";

import { AppComponent } from "./app.component";
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [AppComponent, StoreComponent],
  imports: [BrowserModule],

  providers: [StaticDataSource, ProductRepository],
  bootstrap: [AppComponent]
})
export class AppModule {}
