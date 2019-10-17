import { ShoppingCartService } from './shopping-cart.service';
import { ItemCart } from './shopping-cart.model';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tf-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit() {}

  items(): any[]{
    return this.shoppingCartService.items
  }

  addItem(item: any){
    this.shoppingCartService.addItem(item)
  }

  removeItem(item: ItemCart){
    this.shoppingCartService.removeItem(item)
  }

  total(): number{
    return this.shoppingCartService.total()
  }

  clear(){
    this.shoppingCartService.clear()
  }

}
