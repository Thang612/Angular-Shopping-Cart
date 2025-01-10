import { Component, OnInit } from '@angular/core';
import { CartHeaderComponent } from "./cart-header/cart-header.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { CartSummaryComponent } from "./cart-summary/cart-summary.component";
import { CartPromoComponent } from "./cart-promo/cart-promo.component";
import { Product } from './product.model';
import { CommonModule } from '@angular/common';
import { Promotion } from './promotion.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CartHeaderComponent, ProductListComponent, CartSummaryComponent, CartPromoComponent, CommonModule],
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.handleUpdate()
  }
  numberItem = 0;
  totalPrice = 0;
  tax = 5;
  discount = 0;
  title = 'angular-shopping-cart';
  removeProduct(productId: string):void {
    const index= this.products.findIndex(product=> product.id=== productId)
    this.products.splice(index,1)
    this.handleUpdate();
  }

  promotions: Promotion[]=[
    {
      id:'1',
      discount: 0.1,
      code: 'THANG'
    },
    {
      id:'2',
      discount:0.15,
      code:'Dang'
    }
  ]

  products: Product[] = [
    {
      id: '1',
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      thumnail: 'https://via.placeholder.com/200x150',
      price: 5.99,
      quantity: 1,
    },
    {
      id: '2',
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      thumnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 2,
    },
  ];

  handleUpdate(){
    this.numberItem = this.products.reduce((total, product) => total + product.quantity, 0);
    this.totalPrice = this.products.reduce((total, product) => total + product.quantity*product.price,0)
  }

  updateQuantity(event: { productId: string; newQuantity: string }): void {
    const product = this.products.find(p => p.id === event.productId);
    if (product) {
      product.quantity = Number(event.newQuantity);
      console.log(`Updated ${product.name} to quantity: ${product.quantity}`);
    }
    this.handleUpdate();
  }

  checkPromotion(code:string){
    const promo= this.promotions.find(promo => promo.code === code);
    if (promo){
      this.discount = promo.discount;
    }
  }
 
}
