import { Injectable } from "@angular/core";

import { ItemCart } from "app/restaurant-detail/shopping-cart/shopping-cart.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService){}

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

}
