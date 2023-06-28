import { Iproductos } from "./iproductos";
import { Iproveedores } from "./iproveedores";
import { Itransacciones } from "./itransacciones";

export interface Iusuarios {
    id:Number;
    nombre:string;
    apellido:string;
    contrasenia:string;
    fechaDeNacimiento: Date;
    tipo_usuario:string;
    correo:string;
    numeroCelular:Number;
    

}
