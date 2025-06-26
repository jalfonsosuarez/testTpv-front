import { Component, signal } from "@angular/core";

@Component({
    selector: "group-title",
    imports: [],
    templateUrl: "./group-title.component.html",
})
export class GroupTitleComponent {
    title = signal<string>("Grupo de botones");
}
