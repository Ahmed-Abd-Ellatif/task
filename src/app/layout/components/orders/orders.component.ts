import { Component, OnInit } from '@angular/core';
import { OrdersService } from './services/orders.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Orders } from './models/model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  orders: Orders | any = [];
  orderIndex!: number;
  showOrderPopup: boolean = false;
  isEditMode: boolean = false;
  constructor(
    private _orderService: OrdersService,
    private _router: Router,
    private _fb: FormBuilder
  ) {}

  orderForm = this._fb.group({
    OrderId: [],
    OrderDate: [new Date()],
    UserId: [],
    Products: this._fb.group({
      ProductId: [],
      Quantity: [],
    }),
    PaymentType: [],
  });
  getOrders() {
    this._orderService.getOrders().subscribe((res) => {
      this.orders = res;
    });
  }
  getorderId(order: any) {
    this._router.navigate([
      '/orders/order',
      order.OrderId,
      { data: JSON.stringify(order) },
    ]);
  }

  addOrder() {
    const products: any[] = [];
    products.push(this.orderForm.value.Products);
    const obj = {
      OrderId: this.orderForm.value.OrderId,
      UserId: this.orderForm.value.UserId,
      Products: products,
      PaymentType: this.orderForm.value.PaymentType,
    };
    this.showOrderPopup = false;
    if (!this.isEditMode) {
      this.orders.unshift(obj);
    } else if (this.isEditMode) {
      this.orders.splice(this.orderIndex, 1, obj);
    }
  }

  editProductQuantity(order: any) {
    this.orderIndex = this.orders.indexOf(order);
    this.orderForm.reset();
    this.isEditMode = true;
    this.showOrderPopup = true;
    this.orderForm.patchValue({
      OrderId: order.OrderId,
      UserId: order.UserId,
      Products: order.Products[0],
      PaymentType: order.PaymentType,
    });
  }

  ngOnInit(): void {
    this.getOrders();
  }
}
