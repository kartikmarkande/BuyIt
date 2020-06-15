import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from "./checkout.component";
import { Routes, RouterModule } from '@angular/router';
import { PartialsModule } from "../../partials/partials.module";
const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent
  }
]
@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    PartialsModule,
    RouterModule.forChild(routes)
  ]
})
export class CheckoutModule { }
