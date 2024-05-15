import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private _http: HttpClient) {}
  getOrders(): Observable<any> {
    return this._http.get('assets/order-master-dp/orders.json/');
  }
}
