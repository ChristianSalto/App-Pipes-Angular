import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonComponent } from './pages/no-common/no-common.component';
import { BasicComponent } from './pages/basic/basic.component';
import { OrderComponent } from './pages/order/order.component';

import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { FilterPipe } from './pipes/filter.pipe';




@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonComponent,
    BasicComponent,
    OrderComponent,
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe,
    FilterPipe
  ],
  exports:[
    NumbersComponent,
    NoCommonComponent,
    BasicComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ]
})
export class VentasModule { }
