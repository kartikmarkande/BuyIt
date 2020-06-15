import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { NgModule } from '@angular/core';
import { ShopComponent } from './shop/shop.component';
import { CheckoutModule } from './checkout/checkout.module';

const routes: Routes = [
    { path: '', component: ShopComponent },
    { path: 'checkout', component: CheckoutComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
