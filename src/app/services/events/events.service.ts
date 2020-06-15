import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from "../../models/product";

const API_URL = 'https://www.mocky.io/v2/5eda4003330000740079ea60';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  subject= new Subject();
  constructor(private http: HttpClient) { }

  /* To fetch all the products from API endpoint */
  public getProductLists(): Observable<any> {
    return this.http.post(API_URL, {});
  }

  public updateCart(product){
    this.subject.next(product);
  }


  public getCartDetails(){
    return this.subject.asObservable();
  }
}
