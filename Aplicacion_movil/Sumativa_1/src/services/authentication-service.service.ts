import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Iusuarios } from 'src/app/interfaces/iusuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private usuariosUrl = 'http://192.168.1.7:3000/usuarios';

  constructor(private http: HttpClient) { }

  isAuthenticated(correo: string, contrasenia: string): Observable<boolean> {
    return this.http.get<Iusuarios[]>(this.usuariosUrl).pipe(
      map(usuarios => {
        const usuario = usuarios.find(u => u.correo === correo && u.contrasenia === contrasenia);
        return !!usuario;
      })
    );
  }
  obtenerCredenciales(): { usuario: string, contrasenia: string } {
    const usuario = localStorage.getItem('usuario') ?? '';
    const contrasenia = localStorage.getItem('contrasenia') ?? '';
    return { usuario, contrasenia };
  }
}
