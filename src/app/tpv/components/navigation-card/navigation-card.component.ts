import { Component, inject, input, linkedSignal, signal } from "@angular/core";
import { rxResource } from "@angular/core/rxjs-interop";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { ProductService } from "../../../products/services/product.service";
import { NavigationCardService } from "./navigation-card.service";

@Component({
    selector: "navigation-card",
    imports: [],
    templateUrl: "./navigation-card.component.html",
})
export class NavigationCardComponent {
    sanitizer = inject(DomSanitizer);
    navigationCardService = inject(NavigationCardService);
    productService = inject(ProductService);

    currentPage = signal<number>(1);
    activePage = linkedSignal(this.currentPage);

    direction = input<string>();
    img = input("");
    title = input("");
    safeSvg: SafeHtml = "";

    constructor() {
        this.navigationCardService.currentPage.set(0);
    }

    ngOnChanges() {
        this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(this.img());
    }

    navigateTo() {
        switch (this.direction()) {
            case "first":
                this.navigationCardService.currentPage.set(0);
                return;
            case "previous":
                if (this.navigationCardService.currentPage() >= 1) {
                    this.navigationCardService.currentPage.update(
                        (value) => value - 1
                    );
                }
                return;
            case "next":
                if (
                    this.navigationCardService.currentPage() <
                    Math.ceil(
                        this.totalProducts.value()! / this.productService.limit
                    ) -
                        1
                ) {
                    this.navigationCardService.currentPage.update(
                        (value) => value + 1
                    );
                }
                return;
            case "last":
                this.navigationCardService.currentPage.set(
                    Math.ceil(
                        this.totalProducts.value()! / this.productService.limit
                    ) - 1
                );
                return;
            default:
                return;
        }
    }

    totalProducts = rxResource({
        request: () => ({ page: this.navigationCardService.currentPage() }),
        loader: ({ request }) => {
            return this.productService.getTotalProducts();
        },
    });
}
