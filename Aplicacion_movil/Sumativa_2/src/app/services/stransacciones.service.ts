import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Itransacciones } from '../interfaces/itransacciones';
import { environment } from 'src/environments/environment';
import { Itransaccion } from '../interfaces/itransaccion';

@Injectable({
  providedIn: 'root'
})
export class StransaccionesService {

  constructor(private http:HttpClient) { }
  
  listarTransacciones(idUsuario: number): Observable<Itransacciones[]> {
    return this.http.get<Itransacciones[]>(`${environment.apiURL}/transacciones`).pipe(
      map((transacciones: Itransacciones[]) => {
        return transacciones.filter(transacciones => transacciones.idUsuario === idUsuario);
      })
    );
  }
  crearTransaccion(newTransaccion:Itransaccion):Observable<Itransaccion>{
    return this.http.post<Itransaccion>(`${environment.apiURL}/transacciones`,newTransaccion)
  }
  getTransaccionByID(id:Number):Observable<Itransacciones>{
    return this.http.get<Itransacciones>(`${environment.apiURL}/transacciones/?id=${id}`)
  }
  eliminartransaccion(transaccion:any):Observable<Itransacciones>{
    return this.http.delete<Itransacciones>(`${environment.apiURL}/transacciones/${transaccion.id}`)
  }
}
