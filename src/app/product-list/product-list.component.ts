import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  @Input() products:Product[]=[];
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onUpdateQuantity = new EventEmitter<{ productId: string; newQuantity: string }>();
  removeProduct(productId: string):void {
    this.onRemoveProduct.emit(productId)
  }
  updateQuantity(productId: string, element:HTMLInputElement): void {
    if(Number(element.value) < 0){
      element.value = '0';
      return;
    }else if (Number(element.value) > 99){
      element.value ='99';
      return;
    }
    const newQuantity:string = element.value;
    this.onUpdateQuantity.emit({productId, newQuantity});
  }
}
