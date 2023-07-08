import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Iusuarios } from 'src/app/interfaces/iusuarios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  isAuthenticated(correo: string, contrasenia: string): Observable<boolean> {
    return this.http.get<Iusuarios[]>(`${environment.apiURL}/usuarios`).pipe(
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
