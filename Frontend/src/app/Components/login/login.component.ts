import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router'; // Importa Router
import { timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = ''; // Variable para almacenar mensajes de error

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService
      .login({ username: this.username, password: this.password })
      .subscribe(
        (response) => {
          console.log('Inicio de sesión exitoso:', response);
          // Aquí podrías redirigir al usuario a otra página de la aplicación
          timer(5000);
          this.router.navigateByUrl('/empleados');
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);
          this.errorMessage =
            'Credenciales incorrectas. Por favor, inténtalo de nuevo.'; // Mensaje de error para credenciales incorrectas
          // También podrías manejar otros tipos de errores aquí, como problemas de conexión
        }
      );
  }
}
