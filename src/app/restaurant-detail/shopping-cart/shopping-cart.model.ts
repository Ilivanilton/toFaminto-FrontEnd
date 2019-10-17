import { MenuItem } from './../menu-item/menu-item.model';


export class ItemCart {
    constructor(public item: MenuItem, public quantidade: number = 1) {  }

    valor(): number{
        return this.item.price * this.quantidade
    }

}