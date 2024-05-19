import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private _http: HttpClient) {}
  getOrders(): Observable<Orders> {
    return this._http.get<Orders>('assets/order-master-dp/orders.json/');
  }
}
