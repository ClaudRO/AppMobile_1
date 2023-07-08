import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Iproductos } from 'src/app/interfaces/iproductos';
import { SproductosService } from 'src/app/services/sproductos.service';
import { CredencialesInicioService } from 'src/app/services/credenciales-inicio.service';

@Component({
  selector: 'app-update-producto',
  templateUrl: './update-producto.page.html',
  styleUrls: ['./update-producto.page.scss'],
})
export class UpdateProductoPage {
  idusuario:number=NaN
  producto:Iproductos={
    id:0,
    idUsuario:NaN,
    nombre:"",
    descripcion:"",
    cantidad: NaN,
  	valor: NaN,
    total:NaN
  }

  constructor(
    private productoServ:SproductosService,
    private router:Router,
    private credenciales:CredencialesInicioService,
    private toastController: ToastController
    ) { }
  ionViewWillEnter(){
    this.obtenerCredenciales();
    this.producto.idUsuario=this.idusuario
    this.getProductoByID(this.getIdFromUrl())
  }
  
  obtenerCredenciales() {
    this.idusuario = this.credenciales.getIdUsuarionumber(); // Corrección aquí
  }
  getIdFromUrl(){
    let url = this.router.url
    let arr = url.split("/",3)
    let id=parseInt(arr[2])
    return id
  }
  getProductoByID(productoID:Number){
    this.productoServ.getProductoByID(productoID).subscribe(
      (resp:any)=>{
        this.producto ={
          id:resp[0].id,
          idUsuario:resp[0].idUsuario,
          nombre:resp[0].nombre,
          descripcion:resp[0].descripcion,
          cantidad:resp[0].cantidad,
          valor:resp[0].valor,
          total:resp[0].total

        }
      }
    )
  }
  async mostrarNotificacion(mensaje: string) {
      const toast = await this.toastController.create({
        message: mensaje,
        duration: 2000, // Duración en milisegundos
        position: 'top', // Posición de la notificación
        color: "tertiary"
      });
      toast.present();
    }
  
  updateProducto(){
    this.productoServ.nombresReptidosProductos(this.producto.nombre,this.idusuario).subscribe(async (correoValido: boolean) => 
      {
        if(correoValido){
          this.mostrarNotificacion('El Producto se guardó exitosamente');
          this.productoServ.actualizarProducto(this.producto).subscribe()
          this.router.navigateByUrl("/productos")
        }else{
          const toast = await this.toastController.create({
            message: 'Lo sentimos, el nombre ingresado para el producto ya existe, escoja un nombre distinto.',
            duration: 3000,
            position: 'bottom',
            color: 'danger',
          });
          toast.present();
        }
      });
  }

}
