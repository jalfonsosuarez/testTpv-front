import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  Group,
  GroupOptions,
  Groups,
} from '@products/interfaces/group-interface';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GroupService {
  http = inject(HttpClient);
  totalGroups: number = 0;

  limit: number = 21;

  constructor() {
    this.getTotalGroups().subscribe((resp) => {
      this.totalGroups = resp;
    });
  }

  getGroups(options: GroupOptions): Observable<Groups> {
    const { limit = 21, offset = 0 } = options;
    this.limit = limit;
    return this.http.get<Group[]>('data/groups.json').pipe(
      map((data: Group[]) => ({
        count: this.totalGroups,
        pages: Math.ceil(this.totalGroups / limit),
        groups: data
          .slice(offset, offset + limit)
          .sort((a, b) => a.description.localeCompare(b.description)),
      }))
    );
  }

  getTotalGroups(): Observable<number> {
    return this.http
      .get<Group[]>('data/groups.json')
      .pipe(map((data: Group[]) => data.length));
  }
}
