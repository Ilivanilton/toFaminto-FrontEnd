import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './crud/update/update.component';
import { AddComponent } from './crud/add/add.component';
import { IndexComponent } from './crud/index/index.component';
import { CrudComponent } from './crud/crud.component';
import { OrderComponent } from './order/order.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { OrderSummaryComponent } from './order-summary/order-summary.component';



export const ROUTE: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurantes/:id', component: RestaurantDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full' },
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]},
    {path: 'order-summary', component: OrderSummaryComponent,},
    {path: 'admin', component: CrudComponent,
    children: [
      {path: '', redirectTo: 'index', pathMatch: 'full' },
      {path: 'index', component: IndexComponent},
      {path: 'add', component: AddComponent},
      {path: 'update/:id', component: UpdateComponent}
    ]},
    {path: 'login', component: LoginComponent},
    {path: 'restaurantes', component: RestaurantsComponent},
    {
      path: 'sobre',
      loadChildren: './about/about.module#AboutModule'
    },
    {
      path: 'order',
      loadChildren: './order/order.module#OrderModule'
    },


  ]
