import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrderComponent } from './components/order/order.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrdersComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
