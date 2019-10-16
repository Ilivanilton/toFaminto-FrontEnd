import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Component, OnInit, Output } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'tf-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

menu: Observable<MenuItem[]>

  constructor(private restaurantsService:RestaurantsService,
              private actRoute :ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantsService
    .menuOfRestaurant(this.actRoute.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem){
    console.log(item)
  }

}
