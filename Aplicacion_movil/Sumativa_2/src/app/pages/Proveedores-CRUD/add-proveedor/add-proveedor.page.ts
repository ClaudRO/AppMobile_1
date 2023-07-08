import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Iproveedor } from 'src/app/interfaces/iproveedor';
import { SproveedoresService } from 'src/app/services/sproveedores.service';
import { CredencialesInicioService } from 'src/app/services/credenciales-inicio.service';

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
    private toastController: ToastController,
    private router: Router

  ) { }

  ngOnInit() {
    this.getCrendenciales()
  }
  async mostrarNotificacion(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000, // Duración en milisegundos
      position: 'middle', // Posición de la notificación
      color: "danger"
    });
    toast.present();
  }
  crearProveedor(){
    if (!this.newProveedor.nombre) {
      this.mostrarNotificacion('El nombre del proveedor no puede estar vacío.');
      return;
    }else{
      this.proveedorServ.nombresReptidosProveedores(this.newProveedor.nombre,this.credenciales.getIdUsuario()).subscribe(async (correoValido: boolean) => 
      {
        if(correoValido){
          this.proveedorServ.crearProveedor(this.newProveedor).subscribe();
          this.mostrarNotificacion('El Proveedor se guardó exitosamente');
          this.router.navigateByUrl('/provedores');
        }else{
          const toast = await this.toastController.create({
            message: 'Lo sentimos, el nombre ingresado para el proveedor ya existe, escoja un nombre distinto.',
            duration: 3000,
            position: 'bottom',
            color: 'danger',
          });
          toast.present();
        }
      });
    }
  }
  getCrendenciales(){
    this.newProveedor.idUsuario=this.credenciales.getIdUsuario()
  }

}
