import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient) {}

  getProducts(): Observable<Products> {
    return this._http.get<Products>('assets/order-master-dp/porducts.json');
  }
}
