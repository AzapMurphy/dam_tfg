import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ¡IMPORTANTE para el [(ngModel)]!
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,       // Esto permite que el HTML entienda ngModel
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  

  usuario = {
    nombre: '',
    correo: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Datos enviados:', this.usuario);
    
    if (this.usuario.correo && this.usuario.password) {
      alert('Bienvenida, ' + (this.usuario.nombre || 'usuaria'));
      this.router.navigate(['/buscador']);
    } else {
      alert('Por favor, rellena los campos obligatorios');
    }
  }
}