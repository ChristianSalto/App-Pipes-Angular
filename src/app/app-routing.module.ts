import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicComponent } from './ventas/pages/basic/basic.component';
import { NoCommonComponent } from './ventas/pages/no-common/no-common.component';
import { NumbersComponent } from './ventas/pages/numbers/numbers.component';
import { OrderComponent } from './ventas/pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    pathMatch: 'full',
  },
  {
    path: 'numbers',
    component: NumbersComponent,
  },
  {
    path: 'no-common',
    component: NoCommonComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
