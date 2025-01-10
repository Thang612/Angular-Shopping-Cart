import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  imports: [CommonModule],
  templateUrl: './cart-summary.component.html',
})
export class CartSummaryComponent{
  @Input() totalPrice:number=0;
  @Input() tax:number=0;
  @Input() discount:number=0;
}
