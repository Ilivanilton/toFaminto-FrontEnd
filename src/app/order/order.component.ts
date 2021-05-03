import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemCart } from 'app/restaurant-detail/shopping-cart/shopping-cart.model';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { Order, OrderItem } from './order.model';
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

  delivery: number = 8

  constructor(
    private orderService: OrderService,
    private router: Router
  ){ }

  ngOnInit() {
  }

  itemsValue():number{
    return this.orderService.itemsValue()
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

  checkOrder(order: Order){
    order.orderItems = this.cartItems()
      .map(
        (item:ItemCart) =>
          new OrderItem(item.quantidade,item.item.id)
      )
    this.orderService.checkOrder(order)
        .subscribe(
          (orderId : string) => {
            this.router.navigate(['/order-summary'])
            this.orderService.clear()
          }
        )
  }

}
