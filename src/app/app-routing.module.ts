import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from "../app/views/pages/shop/shop.component";
import { CheckoutComponent } from './views/pages/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'pages', loadChildren: () => import('../app/views/pages/pages.module').then(m => m.PagesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
