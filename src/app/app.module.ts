import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//pages and partials modules
import { PartialsModule } from './views/partials/partials.module';
import { PagesModule } from "../app/views/pages/pages.module";

// Public pages
import { ShopModule } from "../app/views/pages/shop/shop.module";
import { CheckoutModule } from "../app/views/pages/checkout/checkout.module";

// NgBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//httpClientModule
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartialsModule,
    PagesModule,
    ShopModule,
    CheckoutModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
