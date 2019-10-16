import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tf-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantService: RestaurantsService,
              private actRoute: ActivatedRoute) { }

  ngOnInit() {
  
    this.reviews = this.restaurantService
    .reviewsOfRestaurant(this.actRoute.parent.snapshot.params['id'])
  }

}
