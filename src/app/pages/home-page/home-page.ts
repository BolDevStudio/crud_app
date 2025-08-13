import { Component } from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user-service';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  users: User[] = [];
  constructor(public userService: UserService) {
    this.users = this.userService.getUsers()
  }

}
