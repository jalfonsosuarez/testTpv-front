export interface Groups {
  count: number;
  pages: number;
  groups: Group[];
}

export interface Group {
  id: number;
  description: string;
  active: boolean;
  image: string;
}

export interface GroupOptions {
  limit?: number;
  offset?: number;
}
