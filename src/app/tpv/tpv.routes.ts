import { Routes } from '@angular/router';
import { TpvLayoutComponent } from './layouts/tpv-layout/tpv-layout.component';
import { TpvPageComponent } from './pages/tpv-page/tpv-page.component';

export const tpvRoutes: Routes = [
  {
    path: '',
    component: TpvLayoutComponent,
    children: [
      {
        path: '',
        component: TpvPageComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default tpvRoutes;
