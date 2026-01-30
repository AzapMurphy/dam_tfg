import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({ providedIn: 'root' })
export class CarritoService {
  private items: Producto[] = [];

  agregar(producto: Producto) {
    this.items.push(producto);
  }

  obtenerItems() {
    return this.items;
  }

  getCartGrouped() {
    return {
      mercadona: this.items.filter(p => p.supermercado === 'Mercadona'),
      carrefour: this.items.filter(p => p.supermercado === 'Carrefour'),
      dia: this.items.filter(p => p.supermercado === 'Dia')
    };
  }
}