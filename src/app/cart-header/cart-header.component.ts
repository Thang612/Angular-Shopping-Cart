import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  imports: [],
  templateUrl: './cart-header.component.html',
})
export class CartHeaderComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() numeberItem:number= 0;
  title='Shopping Cart'
}
