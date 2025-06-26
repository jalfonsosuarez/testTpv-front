import { Component, inject, signal } from "@angular/core";
import { Groups } from "@products/interfaces/group-interface";
import { GroupService } from "@products/services/group.service";
import { GroupCardComponent } from "@products/components/group-card/group-card.component";

@Component({
    selector: "group-panel",
    imports: [GroupCardComponent],
    templateUrl: "./group-panel.component.html",
})
export class GroupPanelComponent {
    groupService = inject(GroupService);
    groups: Groups = {} as Groups;

    ngOnInit() {
        this.getGroups();
    }

    getGroups() {
        this.groupService
            .getGroups({ offset: 0, limit: 21 })
            .subscribe((groups) => (this.groups = groups));
    }
}
