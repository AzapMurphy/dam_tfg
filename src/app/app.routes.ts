import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CarritoComponent } from './components/carrito/carrito.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'buscador', component: BuscadorComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', redirectTo: 'login' }
];