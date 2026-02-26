import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Second } from './pages/second/second';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'second', component: Second },
];