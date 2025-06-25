import { Component, HostListener, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from '@products/components/product-card/product-card.component';
import { SalesTableComponent } from '../../components/sales-table/sales-table.component';
import { TotalSaleComponent } from '../../components/total-sale/total-sale.component';
import { ProductService } from '@products/services/product.service';
import { ProductNavigationComponent } from '../../components/product-navigation/product-navigation.component';
import { NavigationCardService } from '../../components/navigation-card/navigation-card.service';

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
  navigationService = inject(NavigationCardService);
  screenWidth: number = window.innerWidth;
  initialRegister: number = 0;
  registers: number = 21;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.registers = this.screenWidth > 1512 ? 24 : 21;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
    this.registers = this.screenWidth > 1512 ? 24 : 21;
    this.navigationService.currentPage.set(1);
    this.navigationService.currentPage.set(0);
  }

  products = rxResource({
    request: () => ({ page: this.navigationService.currentPage() }),
    loader: ({ request }) => {
      return this.productService.getProducts({
        offset: request.page * this.registers,
        limit: this.registers,
      });
    },
  });
}
