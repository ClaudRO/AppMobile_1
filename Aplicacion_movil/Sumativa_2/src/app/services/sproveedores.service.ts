import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproveedores } from '../interfaces/iproveedores';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproveedor } from '../interfaces/iproveedor';

@Injectable({
  providedIn: 'root'
})
export class SproveedoresService {
  constructor(private http:HttpClient) { }
  
  
  listarProveedores(idUsuario: number): Observable<Iproveedores[]> {
    return this.http.get<Iproveedores[]>(`${environment.apiURL}/proveedores`).pipe(
      map((proveedores: Iproveedores[]) => {
        return proveedores.filter(proveedores => proveedores.idUsuario === idUsuario);
      })
    );
  }
  nombresReptidosProveedores(nombreIngresado: string, idUsuario: Number): Observable<boolean> {
    return this.http.get<Iproveedores[]>(`${environment.apiURL}/usuarios`).pipe(
      map(proveedores => {
        const proveedor = proveedores.find(u => u.nombre=== nombreIngresado && u.id === idUsuario);
        if (proveedor) {
          return true;
        }
        return false;
      })
    );
  }
  crearProveedor(newProveedor:Iproveedor):Observable<Iproveedor>{
    return this.http.post<Iproveedor>(`${environment.apiURL}/proveedores`,newProveedor)
  }
  getProveedorByID(id:Number):Observable<Iproveedores>{
    return this.http.get<Iproveedores>(`${environment.apiURL}/proveedores/?id=${id}`)
  }
  actualizarProveedor(proveedor:any):Observable<Iproveedores>{
    return this.http.put<Iproveedores>(`${environment.apiURL}/proveedores/${proveedor.id}`,proveedor)
  }

  eliminarproveedor(proveedor:any):Observable<Iproveedores>{
    return this.http.delete<Iproveedores>(`${environment.apiURL}/proveedores/${proveedor.id}`)
  }
}
