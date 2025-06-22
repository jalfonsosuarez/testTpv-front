import { Component, input } from '@angular/core';
import { Product } from '@products/interfaces/product.interface';

@Component({
  selector: 'product-card',
  imports: [],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  product = input<Product | null>();

  setProduct(product: Product | null) {
    if (!product) return;
    console.log(product);
  }
}
