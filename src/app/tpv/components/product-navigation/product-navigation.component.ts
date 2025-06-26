import { Component, inject, input } from "@angular/core";
import { NavigationCardComponent } from "../navigation-card/navigation-card.component";
import { Navigation } from "../../interfaces/navitagion.interface";

@Component({
    selector: "product-navigation",
    imports: [NavigationCardComponent],
    templateUrl: "./product-navigation.component.html",
})
export class ProductNavigationComponent {
    navigations: Navigation[] = [
        {
            img: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 26 26"><path fill="currentColor" d="M21.125 0H4.875A4.874 4.874 0 0 0 0 4.875v16.25A4.874 4.874 0 0 0 4.875 26h16.25A4.874 4.874 0 0 0 26 21.125V4.875A4.874 4.874 0 0 0 21.125 0M18 17.949a.96.96 0 0 1-.479.817a.99.99 0 0 1-.952.039L11 14.382V18c0 .551-.449 1-1 1H8c-.551 0-1-.449-1-1V8c0-.551.449-1 1-1h2c.551 0 1 .449 1 1v3.618l5.569-4.425a.99.99 0 0 1 .952.04c.29.174.479.485.479.817z"/></svg>`,
            title: "Primera",
            direction: "first",
        },
        {
            img: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 26 26"><path fill="currentColor" d="M21.125 0H4.875A4.874 4.874 0 0 0 0 4.875v16.25A4.874 4.874 0 0 0 4.875 26h16.25A4.874 4.874 0 0 0 26 21.125V4.875A4.874 4.874 0 0 0 21.125 0M16 17.949a.96.96 0 0 1-.479.817a.99.99 0 0 1-.952.039L8.34 13.857c-.337-.296-.537-.494-.537-.857s.237-.575.537-.857l6.229-4.949a.99.99 0 0 1 .952.04c.29.173.479.484.479.816z"/></svg>`,
            title: "Anterior",
            direction: "previous",
        },
        {
            img: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 26 26"><path fill="currentColor" d="M21.125 0H4.875A4.874 4.874 0 0 0 0 4.875v16.25A4.874 4.874 0 0 0 4.875 26h16.25A4.874 4.874 0 0 0 26 21.125V4.875A4.874 4.874 0 0 0 21.125 0M17.66 13.857l-6.229 4.949a.98.98 0 0 1-.951-.04a.97.97 0 0 1-.48-.816V8.051c0-.334.19-.644.479-.817a.99.99 0 0 1 .952-.039l6.229 4.948c.336.297.537.494.537.857s-.236.575-.537.857"/></svg>`,
            title: "Siguiente",
            direction: "next",
        },
        {
            img: `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 26 26"><path fill="currentColor" d="M21.125 0H4.875A4.874 4.874 0 0 0 0 4.875v16.25A4.874 4.874 0 0 0 4.875 26h16.25A4.874 4.874 0 0 0 26 21.125V4.875A4.874 4.874 0 0 0 21.125 0M19 18c0 .551-.449 1-1 1h-2c-.551 0-1-.449-1-1v-3.618l-5.569 4.425a.98.98 0 0 1-.951-.04a.97.97 0 0 1-.48-.817V8.051c0-.334.19-.644.479-.817a.99.99 0 0 1 .952-.039L15 11.618V8c0-.551.449-1 1-1h2c.551 0 1 .449 1 1z"/></svg>`,
            title: "Última",
            direction: "last",
        },
    ];
}
