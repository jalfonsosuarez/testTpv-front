import { Component, input } from '@angular/core';
import { Group } from '@products/interfaces/group-interface';

@Component({
  selector: 'group-card',
  imports: [],
  templateUrl: './group-card.component.html',
})
export class GroupCardComponent {
  group = input<Group | null>();

  setGroup() {}
}
