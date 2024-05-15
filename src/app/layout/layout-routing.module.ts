import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./components/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./components/users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./components/orders/orders.module').then(
            (m) => m.OrdersModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
