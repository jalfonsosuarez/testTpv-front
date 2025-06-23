import { Component, input } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
    selector: "navigation-card",
    imports: [],
    templateUrl: "./navigation-card.component.html",
})
export class NavigationCardComponent {
    direction = input("next");
    img = input("");
    safeSvg: SafeHtml = "";

    constructor(private sanitizer: DomSanitizer) {}

    ngOnChanges() {
        this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(this.img());
    }
    navigateTo() {}
}
