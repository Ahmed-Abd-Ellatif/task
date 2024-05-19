import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { Users } from './models/model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: Users | any = [];
  constructor(private _usersServices: UsersService) {}
  getUsers() {
    this._usersServices.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
  ngOnInit(): void {
    this.getUsers();
  }
}
