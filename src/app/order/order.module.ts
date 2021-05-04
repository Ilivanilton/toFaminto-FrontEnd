import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "app/shared/shared.module";
import { DeliveryCostComponent } from "./delivery-cost/delivery-cost.component";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { OrderComponent } from "./order.component";

const ROUTES: Routes = [
  {path:'', component: OrderComponent}
]

@NgModule({
  declarations:[
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class OrderModule {}
