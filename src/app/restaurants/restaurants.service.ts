import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { TF_API } from "app/app.api";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"
import { ErrorHandler } from "app/app.error-handler";
import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";


@Injectable()
export class RestaurantsService {

    constructor(private http: Http){}

    restaurants(): Observable<Restaurant[]>{
        return this.http.get(`${TF_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.HandlerError)
    }

    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get(`${TF_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.HandlerError)
    }

    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${TF_API}/restaurant/${id}/reviews`)
        .map(res => res.json())
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]>{
        return this.http.get(`${TF_API}/restaurant/${id}/menu`)
        .map(resp => resp.json())
    }

}