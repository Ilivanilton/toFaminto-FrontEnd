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

  total(): number{
    return this.shoppingCartService.total()
  }

}
