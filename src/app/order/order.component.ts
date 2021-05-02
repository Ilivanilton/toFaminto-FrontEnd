import { Component, OnInit } from '@angular/core';
import { ItemCart } from 'app/restaurant-detail/shopping-cart/shopping-cart.model';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';

@Component({
  selector: 'tf-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] =[
    {label:'Dinheiro',value:'MON'},
    {label:'Cartão de Débito', value:'DEB'},
    {label: 'Vale Refeição', value: 'REF'}
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems() : ItemCart[]{
    return this.orderService.itemCart()
  }

  increaseQty(item: ItemCart){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: ItemCart){
    this.orderService.decreaseQty(item)
  }

  remove(item: ItemCart){
    this.orderService.remove(item)
  }

}
