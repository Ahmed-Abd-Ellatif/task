import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _http: HttpClient) {}
  getUsers(): Observable<Users> {
    return this._http.get<Users>('assets/order-master-dp/users.json');
  }
}
