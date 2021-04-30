import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { RadioOption } from './radio-option.model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";
@Component({
  selector: 'tf-radio',
  templateUrl: './radio.component.html',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit ,ControlValueAccessor{

  @Input() options: RadioOption[]
  value: any
  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value
    this.onChange(this.value)
  }

  /**
   * Write a new value to the element.
   */
   writeValue(obj: any): void{
    this.value = obj
  }
  /**
   * Set the function to be called when the control receives
   * a change event.
   * Sempre que esse valor mudar a fn de ser chamada com esse valor
   * this.onChange(newValue)
   */
  registerOnChange(fn: any): void{
    this.onChange = fn
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn: any): void{}

}
