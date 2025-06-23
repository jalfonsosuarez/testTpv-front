import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'total-sale',
  imports: [CurrencyPipe],
  templateUrl: './total-sale.component.html',
})
export class TotalSaleComponent {
  total = 45.5;
}
