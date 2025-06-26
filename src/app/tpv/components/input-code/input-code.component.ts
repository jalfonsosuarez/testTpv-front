import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: "input-code",
    imports: [],
    templateUrl: "./input-code.component.html",
})
export class InputCodeComponent {
    @ViewChild("mainInput") mainInput!: ElementRef<HTMLInputElement>;

    ngAfterViewInit() {
        this.mainInput.nativeElement.focus();
    }
}
