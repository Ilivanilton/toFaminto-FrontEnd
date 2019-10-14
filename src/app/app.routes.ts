import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";



export const ROUTE: Routes = [
    {path: '', component: HomeComponent},
    {path: 'sobre', component: AboutComponent}
]