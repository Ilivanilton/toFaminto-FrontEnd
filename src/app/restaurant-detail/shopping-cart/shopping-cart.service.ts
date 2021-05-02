import { MenuItem } from './../menu-item/menu-item.model';
import { ItemCart } from './shopping-cart.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingCartService {

    items: ItemCart[] = []

    addItem(item: MenuItem){
        let foundItem = this.items.find((mItem) => mItem.item.id === item.id)
        if (foundItem) {
            this.increaseQty(foundItem)
        } else {
            this.items.push(new ItemCart(item))
        }
    }

    increaseQty(item: ItemCart){
        item.quantidade++
    }

    decreaseQty(item: ItemCart){
      item.quantidade--
      if(item.quantidade === 0){
        this.removeItem(item)
      }
    }

    removeItem(item: ItemCart){
        this.items.splice(this.items.indexOf(item), 1)
    }

    clear(){
        this.items = []
    }

    total(): number{
        return this.items
            .map(i => i.valor() )
            .reduce((prev,value) => prev+value, 0)
    }

}
