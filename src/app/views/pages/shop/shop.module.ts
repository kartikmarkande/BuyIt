import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from "./shop.component";

/* importing for header */
import { PartialsModule } from '../../partials/partials.module';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      {
        path: '',
        redirectTo: 'shopingpage',
        pathMatch: 'full'
      },
      {
        path: 'shopingpage',
        component: ShopComponent
      },
    ]
  }
]

@NgModule({
  declarations: [ShopComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    PartialsModule
  ],
  exports: [ShopComponent],
})
export class ShopModule { }
