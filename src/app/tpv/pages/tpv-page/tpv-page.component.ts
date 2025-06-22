import { Component } from '@angular/core';
import { ProductCardComponent } from '@products/components/product-card/product-card.component';
import { Product } from '@products/interfaces/product.interface';
import { SalesTableComponent } from '../../components/sales-table/sales-table.component';

@Component({
  selector: 'app-tpv-page',
  imports: [ProductCardComponent, SalesTableComponent],
  templateUrl: './tpv-page.component.html',
})
export class TpvPageComponent {
  products: Product[] = [
    {
      id: 1,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 1',
      price: 10,
    },
    {
      id: 2,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 2',
      price: 10,
    },
    {
      id: 3,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 3',
      price: 10,
    },
    {
      id: 4,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 4',
      price: 10,
    },
    {
      id: 5,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 5',
      price: 10,
    },
    {
      id: 6,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 6',
      price: 10,
    },
    {
      id: 7,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 7',
      price: 10,
    },
    {
      id: 8,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 8',
      price: 10,
    },
    {
      id: 9,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 9',
      price: 10,
    },
    {
      id: 10,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 10',
      price: 10,
    },
    {
      id: 11,
      image: 'assets/images/no-image.jpg',
      title: 'Ración Calamares',
      price: 10,
    },
    {
      id: 12,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 12',
      price: 10,
    },
    {
      id: 13,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 13',
      price: 10,
    },
    {
      id: 14,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 14',
      price: 10,
    },
    {
      id: 15,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 15',
      price: 10,
    },
    {
      id: 16,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 16',
      price: 10,
    },
    {
      id: 17,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 17',
      price: 10,
    },
    {
      id: 18,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 18',
      price: 10,
    },
    {
      id: 19,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 19',
      price: 10,
    },
    {
      id: 20,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 20',
      price: 10,
    },
    {
      id: 21,
      image: 'assets/images/no-image.jpg',
      title: 'Prod 21',
      price: 10,
    },
  ];
}
