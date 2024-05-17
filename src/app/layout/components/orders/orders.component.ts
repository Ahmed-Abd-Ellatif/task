import { Component, OnInit } from '@angular/core';
import { OrdersService } from './services/orders.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: any[]=[];
  showOrderPopup:boolean=false
  constructor(private _orderService: OrdersService, private _router: Router,private _fb:FormBuilder) {}

  orderForm = this._fb.group({
    OrderId: [12330],
      OrderDate: [new Date()],
      UserId: ["8475-2345-2312"],
      Products: [[{ "ProductId": 50, "Quantity": 50 }]],
      PaymentType: ["online"]
  })
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
  addOrder(){
    console.log(this.orderForm.value)
this.orders.unshift(this.orderForm.value)
 }
}
