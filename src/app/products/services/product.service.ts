import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@products/interfaces/product.interface';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  initialRegister: number = 0;
  registers: number = 21;

  constructor(private http: HttpClient) {}

  getProducts(offset: number, limit: number): Observable<Product[]> {
    return this.http.get<Product[]>('data/products.json').pipe(
      // slice the data array according to offset and limit
      map((data: Product[]) => data.slice(offset, offset + limit))
    );
  }
}
