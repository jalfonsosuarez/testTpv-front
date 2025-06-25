import { Injectable, signal } from "@angular/core";
import { Observable } from "rxjs";
import { SalesTableInterface } from "./sales-table.interface";
import { toObservable } from "@angular/core/rxjs-interop";

@Injectable({ providedIn: "root" })
export class SalesTableService {
    sales = signal<SalesTableInterface[]>([]);
    total = signal<number>(0);

    addSale(sale: SalesTableInterface) {
        const saleFind = this.sales().find(
            (s) => s.idProduct === sale.idProduct
        );
        if (saleFind) {
            saleFind.quantity += sale.quantity;
            saleFind.amount += sale.amount;
            return;
        }
        this.sales.update((sales) => [sale, ...sales]);
    }

    getSales(): Observable<SalesTableInterface[]> {
        return toObservable(this.sales);
    }

    getNextId() {
        const salesArray = this.sales();
        if (salesArray.length === 0) return 1;
        return Math.max(...salesArray.map((sale) => sale.id)) + 1;
    }

    getTotal() {
        const salesArray = this.sales();
        if (salesArray.length === 0) return 0;
        return salesArray.reduce(
            (total, sale) => total + (sale.amount ?? 0),
            0
        );
    }
}
