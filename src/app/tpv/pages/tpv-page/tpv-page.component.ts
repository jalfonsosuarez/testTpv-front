import { Component, HostListener, inject } from '@angular/core';
import { ProductCardComponent } from '@products/components/product-card/product-card.component';
import { Product } from '@products/interfaces/product.interface';
import { SalesTableComponent } from '../../components/sales-table/sales-table.component';
import { TotalSaleComponent } from '../../components/total-sale/total-sale.component';
import { ProductService } from '@products/services/product.service';
import { ProductNavigationComponent } from '../../components/product-navigation/product-navigation.component';

@Component({
  selector: 'app-tpv-page',
  imports: [
    ProductCardComponent,
    SalesTableComponent,
    TotalSaleComponent,
    ProductNavigationComponent,
  ],
  templateUrl: './tpv-page.component.html',
})
export class TpvPageComponent {
  productService = inject(ProductService);
  products: Product[] = [];
  screenWidth: number = window.innerWidth;
  initialRegister: number = 0;
  registers: number = 21;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.registers = this.screenWidth > 1512 ? 24 : 21;
    this.getProducts();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    this.registers = this.screenWidth > 1512 ? 24 : 21;
    this.getProducts();
  }

  getProducts() {
    this.productService
      .getProducts(this.initialRegister, this.registers)
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }
}
