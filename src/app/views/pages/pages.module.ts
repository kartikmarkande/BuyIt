import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartialsModule } from '../partials/partials.module';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PartialsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
