import { Component, inject, input } from '@angular/core';
import { Product } from '@products/interfaces/product.interface';
import { SalesTableService } from '../../../tpv/components/sales-table/sales-table.service';
import { SalesTableInterface } from '../../../tpv/components/sales-table/sales-table.interface';

@Component({
  selector: 'product-card',
  imports: [],
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  salesService = inject(SalesTableService);
  product = input<Product | null>();

  setProduct(product: Product | null) {
    if (!product) return;
    const amount = product.price * 1;
    const sale: SalesTableInterface = {
      id: this.salesService.getNextId(),
      idProduct: product.id,
      description: product.title,
      quantity: 1,
      price: product.price,
      discount: 0,
      amount: amount,
    };
    this.salesService.addSale(sale);
  }
}
