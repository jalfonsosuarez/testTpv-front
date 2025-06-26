import { Component, signal } from "@angular/core";

@Component({
    selector: "lounge",
    imports: [],
    templateUrl: "./lounge.component.html",
})
export class LoungeComponent {
    lounge = signal<string>("Barra");
}
