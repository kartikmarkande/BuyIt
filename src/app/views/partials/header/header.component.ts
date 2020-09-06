import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EventsService } from "../../../services/events/events.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  cartItemsCount = 0;
  constructor(private _eveService: EventsService) { }

  ngOnInit() {
    let productsAdded = [];
    this._eveService.getCartDetails().subscribe(data=>{
      if(productsAdded.length == 0){
          this.cartItemsCount++;
          productsAdded.push(data['id']);
      } else if (productsAdded.length > 0 && !(productsAdded.includes(data['id']))){
        this.cartItemsCount++;
        productsAdded.push(data['id']);
      }
    })
  }

}
