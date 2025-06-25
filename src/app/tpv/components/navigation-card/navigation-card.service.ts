import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: "root" })
export class NavigationCardService {
    currentPage = signal<number>(0);
}
