import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'product',
    loadChildren: () =>
      import('@sabadao/product/feature-shopping').then(
        (m) => m.ProductFeatureShoppingModule
      ),
  },
  {
    path: '**',
    redirectTo: 'product'
  }
];
