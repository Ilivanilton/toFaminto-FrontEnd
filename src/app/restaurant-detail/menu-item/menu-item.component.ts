import { MenuItem } from './menu-item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tf-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

@Input()  item: MenuItem

  constructor() { }

  ngOnInit() {
  }

}
