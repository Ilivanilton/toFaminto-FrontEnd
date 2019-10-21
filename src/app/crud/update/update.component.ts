
import { ActivatedRoute , Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise'


@Component({
  selector: 'tf-update',
  templateUrl: './update.component.html'
})
export class UpdateComponent implements OnInit {


  id: number;
  data: object = {};
  restaurantes: any[] = [];
  restaurantObj: object = {};
  private headers: Headers = new Headers({    
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }) 


  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: Http) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']
    })

    const url = `http://127.0.0.1:8000/restaurantes/`
    this.http.get(url).subscribe(
      (res: Response) => {
        this.restaurantes = res.json();
        for (let i = 0; i < this.restaurantes.length; i++) {
          if (parseInt(this.restaurantes[i].id) === this.id) {
            this.data = this.restaurantes[i];
            break
          }
          
        }
      }
    )

  }

  updateRestaurant(res){
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

    const url = `http://127.0.0.1:8000/restaurantes/${this.id}/`
    this.http.put(url,JSON.stringify(this.restaurantObj), {headers: this.headers})
    .toPromise()
    .then(() => {
      this.router.navigate(['/admin'])
    })
  }

}
