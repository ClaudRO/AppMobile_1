import { Iproductos } from "./iproductos";
import { Iproveedor } from "./iproveedor";

export interface Itransacciones {
  id: number;
  idUsuario:Number;
  fecha: Date;
  proveedor: string;
  productos: Iproductos[];
  
  
}



