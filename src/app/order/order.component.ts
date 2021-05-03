import { Component, OnInit } from '@angular/core';
import { AbstractControl, EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  orderForm: FormGroup

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/

  paymentOptions: RadioOption[] =[
    {label:'Dinheiro',value:'MON'},
    {label:'Cartão de Débito', value:'DEB'},
    {label: 'Vale Refeição', value: 'REF'}
  ]

  delivery: number = 8

  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ){ }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      email: this.formBuilder.control('',[
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      emailConfirmation: this.formBuilder.control('',[
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      address: this.formBuilder.control('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      number: this.formBuilder.control('',[
        Validators.required,
        Validators.pattern(this.numberPattern)
      ]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('',[
        Validators.required
      ])
    },{validator: OrderComponent.equalsTo})
  }

  static equalsTo(group: AbstractControl): {[key:string]: boolean}{
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if (!email || !emailConfirmation) {
      return undefined
    }
    if (email.value !== emailConfirmation.value) {
      return {emailsNotMatch: true}
    }
    return undefined
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
