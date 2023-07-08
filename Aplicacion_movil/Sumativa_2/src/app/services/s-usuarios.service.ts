import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Iusuarios } from '../interfaces/iusuarios';
import { environment } from 'src/environments/environment';
import { Iusuario } from '../interfaces/iusuario';

@Injectable({
  providedIn: 'root'
})
export class SUsuariosService {

  constructor(private http:HttpClient) { }
  
  listarUsuario(idUsuario: number): Observable<Iusuarios[]> {
    return this.http.get<Iusuarios[]>(`${environment.apiURL}/usuarios`).pipe(
      map((usuario: Iusuarios[]) => {
        return usuario.filter(usuario =>usuario.id === idUsuario);
      })
    );
  }
  listarUser():Observable<Iusuarios>{
    return this.http.get<Iusuarios>(`${environment.apiURL}/usuarios`)
  }
  validarCorreo(correo:string):Observable<boolean>{
    return this.http.get<Iusuarios[]>(`${environment.apiURL}/usuarios`).pipe(
      map(usuarios => {
        const usuario1= usuarios.find(u => u.correo === correo);
        if(usuario1){
          return false;
        }else{
          return true;
        }
      })
    );
  }
  
  crearUsuario(newUsuario:Iusuario):Observable<Iusuario>{
    return this.http.post<Iusuario>(`${environment.apiURL}/usuarios`,newUsuario)
  }
  getUsuarioByID(id:Number):Observable<Iusuarios>{
    return this.http.get<Iusuarios>(`${environment.apiURL}/usuarios/?id=${id}`)
  }
  actualizarUsuario(usuario:any):Observable<Iusuarios>{
    return this.http.put<Iusuarios>(`${environment.apiURL}/usuarios/${usuario.id}`,usuario)
  }
  eliminarUsuario(usuario:any):Observable<Iusuarios>{
    return this.http.delete<Iusuarios>(`${environment.apiURL}/usuarios/${usuario.id}`)
  }
}
