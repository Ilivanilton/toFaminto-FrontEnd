import { MenuItem } from './../menu-item/menu-item.model';
import { ItemCart } from './shopping-cart.model';


export class ShoppingCartService {

    items: ItemCart[]

    addItem(item: MenuItem){
        let foundItem = this.items.find((mItem) => mItem.item.id === item.id)
        if (foundItem) {
            foundItem.quantidade = foundItem.quantidade + 1
        } else {
            this.items.push(new ItemCart(item))
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
            .map(item => item.valor())
            .reduce((prev,value) => prev+value, 0)
    }
    
}