import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'

})

export class CartComponent {
  @Input() items = [];
  newItem = '';

  @Output() itemAdded = new EventEmitter<string>();

  addItem(event){
    this.itemAdded.emit(this.newItem);
  }
}
