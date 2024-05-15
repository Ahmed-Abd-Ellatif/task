import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';

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
  // orderId: any;
  // getOrderId() {
  //   this._ordersService
  //     .getOrders()
  //     .pipe(
  //       map((order: any, index: number) => {
  //         order[index].OrderId == this.orderId;
  //       })
  //     )
  //     .subscribe((res) => {
  //       console.log('RES', res);
  //     });
  // }
  ngOnInit(): void {
    // this._route.params.subscribe((res) => {
    //   this.orderId = res['id'];
    // });
    // console.log('ORDERID', this.orderId);
    // this.getOrderId();
  }
}
