import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Iproductos } from '../interfaces/iproductos';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Iproducto } from '../interfaces/iproducto';



@Injectable({
  providedIn: 'root'
})
export class SproductosService {
  constructor(private http:HttpClient) { }
  listarProductos(idUsuario: number): Observable<Iproductos[]> {
    return this.http.get<Iproductos[]>(`${environment.apiURL}/productos`).pipe(
      map((productos: Iproductos[]) => {
        return productos.filter(producto => producto.idUsuario === idUsuario);
      })
    );
  }
  
  getProductosUsuario(usuarioId: number): Observable<Iproductos[]> {
    return this.http.get<Iproductos[]>(`${environment.apiURL}/usuarios/${usuarioId}/productos`);
  }
  crearProducto(newProducto:Iproducto):Observable<Iproducto>{
    return this.http.post<Iproducto>(`${environment.apiURL}/productos`,newProducto)
  }
  getProductoByID(id:Number):Observable<Iproductos>{
    return this.http.get<Iproductos>(`${environment.apiURL}/productos/?id=${id}`)
  }
  getProductosByIDusuario(idUsuario:Number):Observable<Iproductos[]>{
    return this.http.get<Iproductos[]>(`${environment.apiURL}/productos/?idusuario=${idUsuario}`)
  }
  actualizarProducto(producto:any):Observable<Iproductos>{
    return this.http.put<Iproductos>(`${environment.apiURL}/productos/${producto.id}`,producto)
  }
  eliminarproducto(producto:any):Observable<Iproductos>{
    return this.http.delete<Iproductos>(`${environment.apiURL}/productos/${producto.id}`)
  }
}
