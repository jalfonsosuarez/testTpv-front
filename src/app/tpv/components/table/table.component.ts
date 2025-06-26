import { Component, signal } from "@angular/core";

@Component({
    selector: "table",
    imports: [],
    templateUrl: "./table.component.html",
})
export class TableComponent {
    tableNumber = signal<number>(1);
}
