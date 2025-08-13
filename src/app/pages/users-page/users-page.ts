import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user-service';

@Component({
  selector: 'app-users-page',
  imports: [
    FormsModule
  ],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css'
})
export class UsersPage {
newUser: User = {id:0, name:'', email:''};
users: User[] = [];
constructor(private userService: UserService) {
  this.users = this.userService.getUsers();
}
addUser() {
  if (this.newUser.name && this.newUser.email) {
    this.userService.addUser({ ...this.newUser});
    this.newUser = {id: 0, name: '', email: ''};
  }
}
}
