import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { EventsService } from "../../../services/events/events.service";
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShopComponent implements OnInit {

  constructor( private _eventService: EventsService) { }

  /* import the product model to check wiht*/
  updatedProdLists: Product[] = [];
  ngOnInit() {
    this.getProducts();
  }


  /* To get the list of products from the API */
  getProducts(){
    let self =  this;
    this._eventService.getProductLists().subscribe(data=>{
      let productlists = data.data;
      self.updatedProdLists = [];
      productlists.forEach(element => {
        self.updatedProdLists.push(element);
      });
    })
  }

  /* To add the products to cart */
  addToCart(product){
    this._eventService.updateCart(product);
  }
}
