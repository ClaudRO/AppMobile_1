import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SproveedoresService } from 'src/app/services/sproveedores.service';

@Component({
  selector: 'app-delete-proveedor',
  templateUrl: './delete-proveedor.page.html',
  styleUrls: ['./delete-proveedor.page.scss'],
})
export class DeleteProveedorPage {

  proveedor={
    id:0,
    nombre:"",
    descripcion:""
  }

  constructor(private proveedorServ:SproveedoresService,private router:Router,private toastController: ToastController) { }
  ionViewWillEnter(){
    this.getProveedorByID(this.getIdFromUrl())
  }
  getIdFromUrl(){
    let url = this.router.url
    let arr = url.split("/",3)
    let id=parseInt(arr[2])
    return id
  }
  getProveedorByID(proveedorID:Number){
    this.proveedorServ.getProveedorByID(proveedorID).subscribe(
      (resp:any)=>{
        this.proveedor ={
          id:resp[0].id,
          nombre:resp[0].nombre,
          descripcion:resp[0].descripcion
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
  eliminarProveedor(){
    this.proveedorServ.eliminarproveedor(this.proveedor).subscribe()
    this.router.navigateByUrl("/provedores")
    this.mostrarNotificacion('El Proveedor se elimino exitosamente');
  }

}
