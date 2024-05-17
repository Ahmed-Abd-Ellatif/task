import { Component, OnInit } from '@angular/core';
import { OrdersService } from './services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: any;
  constructor(private _orderService: OrdersService, private _router: Router) {}
  getOrders() {
    this._orderService.getOrders().subscribe((res) => {
      this.orders = res;
    });
  }
  getorderId(order: any) {
    this._router.navigate(['/orders/order', order.OrderId,{data:JSON.stringify(order)}]);
  }
  ngOnInit(): void {
    this.getOrders();
  }
}
