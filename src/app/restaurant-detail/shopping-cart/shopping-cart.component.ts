import { ItemCart } from './shopping-cart.model';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tf-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test(){
    let menuItem: MenuItem = {
      "id": "id-item",
      "name": "name-item",
      "description": "descricao-item",
      "price": 2,
      "imagePath": "img"
    }

    let itemCart: ItemCart = new ItemCart(menuItem,10)

    console.log(itemCart.quantidade)

  }

}
