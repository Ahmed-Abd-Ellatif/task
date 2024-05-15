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
  getorderId(OrderId: any) {
    this._router.navigate(['/orders/order', OrderId]);
  }
  ngOnInit(): void {
    this.getOrders();
  }
}
