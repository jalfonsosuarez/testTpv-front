import { Component } from "@angular/core";

@Component({
    selector: "date",
    imports: [],
    templateUrl: "./date.component.html",
})
export class DateComponent {
    date = new Date();

    constructor() {
        setInterval(() => {
            this.date = new Date();
        }, 60000); // Actualiza cada minuto
    }

    get formattedDate(): string {
        const day = String(this.date.getDate()).padStart(2, "0");
        const month = String(this.date.getMonth() + 1).padStart(2, "0");
        const year = this.date.getFullYear();
        return `${day}.${month}.${year}`;
    }

    get formattedTime(): string {
        const hours = String(this.date.getHours()).padStart(2, "0");
        const minutes = String(this.date.getMinutes()).padStart(2, "0");
        return `${hours}:${minutes}`;
    }
}
