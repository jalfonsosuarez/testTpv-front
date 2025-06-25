import { CurrencyPipe } from "@angular/common";
import { Component, effect, inject, signal } from "@angular/core";
import { SalesTableService } from "../sales-table/sales-table.service";

@Component({
    selector: "total-sale",
    imports: [CurrencyPipe],
    templateUrl: "./total-sale.component.html",
})
export class TotalSaleComponent {
    salesService = inject(SalesTableService);
    total = signal<number>(0);

    constructor() {
        effect(() => {
            this.total.set(this.salesService.getTotal());
        });
    }
}
