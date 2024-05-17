import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  constructor(
    private _ordersService: OrdersService,
    private _route: ActivatedRoute
  ) {}
  orderId: any;
  order:any
  getOrderId() {
    this._route.params.subscribe((res) => {
      this.orderId = res['id'];
      this.order = JSON.parse(res['data'])
    });
  }
  ngOnInit(): void {
    this.getOrderId();
  }
}
