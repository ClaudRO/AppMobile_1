import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SproductosService } from 'src/app/services/sproductos.service';

@Component({
  selector: 'app-delete-producto',
  templateUrl: './delete-producto.page.html',
  styleUrls: ['./delete-producto.page.scss'],
})
export class DeleteProductoPage {
  producto={
    id:0,
    nombre:"",
    descripcion:""
  }

  constructor(private productoServ:SproductosService,private router:Router,private toastController: ToastController) { }
  ionViewWillEnter(){
    this.getProductoByID(this.getIdFromUrl())
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
          nombre:resp[0].nombre,
          descripcion:resp[0].descripcion
        }
      }
    )

  }
  eliminarProducto(){

    this.productoServ.eliminarproducto(this.producto).subscribe()
    this.router.navigateByUrl("/productos")
    this.mostrarNotificacion('El Producto se elimino exitosamente');
  }

}
