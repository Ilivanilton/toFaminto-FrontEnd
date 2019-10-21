import { Response } from '@angular/http';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'tf-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {
  
  confirmationString: string = "Novo Restaurante adcionado!"
  isAdded: boolean = false
  restaurantObj:Object = {};


  constructor(private http: Http) {}

  ngOnInit() {
  }

  addNewRestaurant(res) {
    this.restaurantObj = 
    {
      "slug": res.slug,
      "name": res.name,
      "category": res.category,
      "deliveryEstimate": res.deliveryEstimate,
      "rating": res.rating,
      "imagePath": res.imagePath,
      "about": res.about,
      "hours": res.hours
    }   

    this.http.post("http://127.0.0.1:8000/restaurantes/",this.restaurantObj)
    .subscribe((res:Response) => {
      console.log(res);
      this.isAdded = true
    })

    
  }




}
