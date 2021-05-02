import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ItemCart } from "../../restaurant-detail/shopping-cart/shopping-cart.model";
@Component({
  selector: 'tf-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

  @Input() items: ItemCart[]

  @Output() increaseQty = new EventEmitter<ItemCart>()
  @Output() decreaseQty = new EventEmitter<ItemCart>()
  @Output() remove = new EventEmitter<ItemCart>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: ItemCart){
    this.increaseQty.emit(item)
  }

  emitDecreaseQty(item: ItemCart){
    this.decreaseQty.emit(item)
  }

  emitRemove(item: ItemCart){
    this.remove.emit(item)
  }

}
