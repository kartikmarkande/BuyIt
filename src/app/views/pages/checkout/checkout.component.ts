import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventsService } from "../../../services/events/events.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CheckoutComponent implements OnInit {

  constructor(private _eveService: EventsService) { }
  cartItems;
  ngOnInit() {
    let self = this;
    this._eveService.getProductLists().subscribe(data => {
      let productlists = data.data;
      self.cartItems = [];
      productlists.forEach(element => {
        self.cartItems.push(element);
      });
    })
  }


}
