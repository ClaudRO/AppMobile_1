import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Iproveedores } from 'src/app/interfaces/iproveedores';
import { SproveedoresService } from 'src/app/services/sproveedores.service';
import { CredencialesInicioService } from 'src/services/credenciales-inicio.service';

@Component({
  selector: 'app-update-proveedor',
  templateUrl: './update-proveedor.page.html',
  styleUrls: ['./update-proveedor.page.scss'],
})
export class UpdateProveedorPage{
  idusuario:Number=NaN


  proveedor:Iproveedores={
    id:0,
    idUsuario:NaN,
    nombre:"",
    descripcion:""
  }

  constructor(
    private proveedorServ:SproveedoresService,
    private router:Router,
    private credenciales:CredencialesInicioService,
    private toastController: ToastController
    ) { }
  ionViewWillEnter(){
    this.obtenerCredenciales();
    this.proveedor.idUsuario=this.idusuario

    this.getProveedorByID(this.getIdFromUrl())

  }
  obtenerCredenciales() {
    this.idusuario = this.credenciales.getIdUsuario(); // Corrección aquí
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
          idUsuario:resp[0].idUsuario,
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
  updateProveedor(){
    this.mostrarNotificacion('El Proveedor se actualizó exitosamente');

    this.proveedorServ.actualizarProveedor(this.proveedor).subscribe()
    this.router.navigateByUrl("/provedores")
  }

}
