import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // <--- Importar Router
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {
  itemsAgrupados: any;

  // UN SOLO CONSTRUCTOR
  constructor(
    private carritoService: CarritoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.itemsAgrupados = this.carritoService.getCartGrouped();
  }

  // FUNCIÓN PARA EL BOTÓN
  volverAlBuscador() {
    console.log('Navegando al buscador...');
    this.router.navigate(['/buscador']);
  }
}