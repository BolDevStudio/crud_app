import { Injectable } from '@angular/core';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    {id:1, name: "Lukasz", email: "l.bolisega@outlook.com"},
    {id:2, name: "dsds", email: "dsdsdsdsds"}
  ]

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    user.id = this.users.length +1;
    this.users.push(user);
  }


}
