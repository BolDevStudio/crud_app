import { Routes } from '@angular/router';
import {HomePage} from './pages/home-page/home-page';
import {UsersPage} from './pages/users-page/users-page';

export const routes: Routes = [
  { path: 'home', component: HomePage},
  { path: 'users', component: UsersPage},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
