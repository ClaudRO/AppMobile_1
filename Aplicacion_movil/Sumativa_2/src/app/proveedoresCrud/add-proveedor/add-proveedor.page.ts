import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Iproveedor } from 'src/app/interfaces/iproveedor';
import { SproveedoresService } from 'src/app/services/sproveedores.service';
import { CredencialesInicioService } from 'src/services/credenciales-inicio.service';

@Component({
  selector: 'app-add-proveedor',
  templateUrl: './add-proveedor.page.html',
  styleUrls: ['./add-proveedor.page.scss'],
})
export class AddProveedorPage implements OnInit {

  newProveedor :Iproveedor={
    idUsuario:NaN,
    nombre:"",
    descripcion:""
  }
  constructor(
    private proveedorServ:SproveedoresService,
    private credenciales:CredencialesInicioService,
    private toastController: ToastController

  ) { }

  ngOnInit() {
    this.getCrendenciales()
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
  crearProveedor(){
    this.proveedorServ.crearProveedor(this.newProveedor).subscribe()
    this.mostrarNotificacion('El Proveedor se guardó exitosamente');

  }
  getCrendenciales(){
    this.newProveedor.idUsuario=this.credenciales.getIdUsuario()
  }

}
