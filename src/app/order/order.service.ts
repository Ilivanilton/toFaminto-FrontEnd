import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable";

import { ItemCart } from "app/restaurant-detail/shopping-cart/shopping-cart.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { Order } from "./order.model";
import { TF_API } from "../app.api";

@Injectable()
export class OrderService {

  constructor(
    private cartService: ShoppingCartService,
    private http: Http
  ){}

  itemCart(): ItemCart[]{
    return this.cartService.items
  }

  increaseQty(item: ItemCart){
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: ItemCart){
    this.cartService.decreaseQty(item)
  }

  remove(item: ItemCart){
    this.cartService.removeItem(item)
  }

  itemsValue():number{
    return this.cartService.total()
  }

  clear(){
    this.cartService.clear()
  }

  checkOrder(order: Order): Observable<string>{
    const headers = new Headers()
    headers.append('Content-Type','application/json')
    return this.http.post(
      `${TF_API}/orders`,
      JSON.stringify(order),
      new RequestOptions({headers: headers})
    ).map( response => response.json())
    .map(order => order.id)
  }

}
