import { RestaurantsService } from './../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';

@Component({
  selector: 'tf-crud',
  templateUrl: './crud.component.html'
})
export class CrudComponent implements OnInit {

  restaurantes: Restaurant[]

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurantes = restaurants)
  }

}
