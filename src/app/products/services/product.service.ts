import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product, Products } from '@products/interfaces/product.interface';
import { map, Observable, of } from 'rxjs';
import { ProductOptions } from '@products/interfaces/product-option.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {
  http = inject(HttpClient);
  totalProducts: number = 0;

  limit: number = 21;

  constructor() {
    this.getTotalProducts().subscribe((resp) => {
      this.totalProducts = resp;
    });
  }

  getProducts(options: ProductOptions): Observable<Products> {
    const { limit = 21, offset = 0 } = options;
    this.limit = limit;
    return this.http.get<Product[]>('data/products.json').pipe(
      map((data: Product[]) => ({
        count: this.totalProducts,
        pages: Math.ceil(this.totalProducts / limit),
        products: data.slice(offset, offset + limit),
      }))
    );
  }

  getTotalProducts(): Observable<number> {
    return this.http
      .get<Product[]>('data/products.json')
      .pipe(map((data: Product[]) => data.length));
  }
}
