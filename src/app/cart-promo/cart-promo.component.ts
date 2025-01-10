import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart-promo',
  imports: [],
  templateUrl: './cart-promo.component.html',
})
export class CartPromoComponent {
  @Output() onCheckPromotion = new EventEmitter();

  checkPromotion(code:string){
    this.onCheckPromotion.emit(code);
  }
}
