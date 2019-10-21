
import { RestaurantsService } from './../../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'tf-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  restaurantes: Restaurant[]
  resId: number
  private headers: Headers = new Headers({    
    'Accept': 'application/json'
  }) 

  constructor(private restaurantsService: RestaurantsService,
              private http: Http) { }

  ngOnInit() {
    this.getRestaurants()
  }

  getRestaurants(){
    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurantes = restaurants)
  }

  deleteRestaurante(id){
    if (confirm("Tem certeza?")) {
      const url = `http://127.0.0.1:8000/restaurantes/${id}/`

      return this.http.delete(url,{headers: this.headers})
        .toPromise()
        .then(() => this.getRestaurants())

    }
  }


    
  

}
