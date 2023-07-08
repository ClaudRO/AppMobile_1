import { Iproductos } from "./iproductos";
import { Iproveedor } from "./iproveedor";

export interface Itransaccion {
  idUsuario:Number;
  fecha: Date;
  proveedor: string;
  productos: Iproductos[];
  valorTotal:Number;
}
