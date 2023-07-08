import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Iproductos } from 'src/app/interfaces/iproductos';
import { Iusuario } from 'src/app/interfaces/iusuario';
import { Iusuarios } from 'src/app/interfaces/iusuarios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CredencialesInicioService {
  private usuario: string = '';
  private contrasenia: string = '';
  private nombreUsuario: string = ''; // Cambio aquí
  private id: Number=NaN;


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
    return this.http.get<Iusuarios[]>(`${environment.apiURL}/usuarios`).pipe(
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
