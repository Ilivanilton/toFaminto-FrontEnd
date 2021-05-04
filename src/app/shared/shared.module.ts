import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";

@NgModule({
  declarations:[
    InputComponent,
    RadioComponent,
    RatingComponent
  ],
  imports:[
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports:[
    InputComponent,
    RadioComponent,
    RatingComponent,
    /*
    * Ao exportar FormsModule, ReactiveFormsModule e CommonModule
    * facilita a legibilidade de código ao modulo que importar
    * SharedModule, pois não precisará reimporta-los.
    */
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class SharedModule {}
