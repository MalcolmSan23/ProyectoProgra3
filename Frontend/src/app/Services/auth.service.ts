import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // URL del servidor de autenticación
  private tokenKey = 'token';

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials)
      .pipe(
        map(response => {
          // Almacena el token en el localStorage después de una respuesta exitosa del servidor
          localStorage.setItem(this.tokenKey, response.token);
          return response; // Pasa la respuesta al siguiente operador en la cadena de operadores
        })
      );
  }

  isLoggedIn(): boolean {
    // Verifica si hay un token almacenado en el localStorage
    const token = localStorage.getItem(this.tokenKey);
    return !!token; // Devuelve true si hay un token, false en caso contrario
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey); // Obtiene el token del localStorage
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey); // Elimina el token del localStorage
  }
}
