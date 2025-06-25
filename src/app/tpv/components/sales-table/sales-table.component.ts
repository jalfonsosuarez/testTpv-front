import { Component, effect, inject, signal } from "@angular/core";
import { SalesTableService } from "./sales-table.service";
import { CurrencyPipe, DecimalPipe } from "@angular/common";
import { SalesTableInterface } from "./sales-table.interface";

@Component({
    selector: "sales-table",
    imports: [CurrencyPipe, DecimalPipe],
    templateUrl: "./sales-table.component.html",
})
export class SalesTableComponent {
    salesService = inject(SalesTableService);
    sales = signal<SalesTableInterface[]>([]);

    constructor() {
        effect(() => {
            this.sales.set(this.salesService.sales());
        });
    }
}
