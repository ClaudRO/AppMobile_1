import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Iusuario } from 'src/app/interfaces/iusuario';
import { Iusuarios } from 'src/app/interfaces/iusuarios';

@Injectable({
  providedIn: 'root'
})
export class CredencialesInicioService {
  private usuario: string = '';
  private contrasenia: string = '';
  private nombreUsuario: string = ''; // Cambio aquí
  private id: Number=NaN;

  private usuariosUrl = 'http://192.168.1.7:3000/usuarios';

  constructor(private http: HttpClient) { }

  setCredenciales(usuario: string, contrasenia: string) {
    this.usuario = usuario;
    this.contrasenia = contrasenia;
  }

  getCredenciales(): { usuario: string, contrasenia: string } {
    return { usuario: this.usuario, contrasenia: this.contrasenia };
  }

  setNombreUsuario(nombreUsuario: string) { // Nuevo método
    this.nombreUsuario = nombreUsuario;
  }
  setIdUsuario(id: Number) { // Nuevo método
    this.id = id;
  }

  getNombreUsuario(): string { // Nuevo método
    return this.nombreUsuario;
  }
  getIdUsuario(): Number { // Nuevo método
    return this.id;
  }

  validarCredenciales(correo: string, contrasenia: string): Observable<boolean> {
    return this.http.get<Iusuarios[]>(this.usuariosUrl).pipe(
      map(usuarios => {
        const usuario = usuarios.find(u => u.correo === correo && u.contrasenia === contrasenia);
        if (usuario) {
          this.setNombreUsuario(usuario.nombre);
          this.setIdUsuario(usuario.id);
        }
        return !!usuario;
      })
    );
  }
 

  
}
