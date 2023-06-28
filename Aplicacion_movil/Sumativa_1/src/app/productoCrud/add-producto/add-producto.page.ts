import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Iproducto } from 'src/app/interfaces/iproducto';
import { SproductosService } from 'src/app/services/sproductos.service';
import { CredencialesInicioService } from 'src/services/credenciales-inicio.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.page.html',
  styleUrls: ['./add-producto.page.scss'],
})
export class AddProductoPage implements OnInit {
  idusuario:Number=NaN
  newProducto :Iproducto={
    idUsuario:NaN,
    nombre:"",
    descripcion:"",
    cantidad: 0,
  	valor: 0
  }
  constructor(
    private productoServ:SproductosService,
    private credencialesService:CredencialesInicioService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.obtenerCredenciales();
    this.newProducto.idUsuario=this.idusuario
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
  obtenerCredenciales() {
    this.idusuario = this.credencialesService.getIdUsuario(); // Corrección aquí
  }
  crearProducto(){
    this.productoServ.crearProducto(this.newProducto).subscribe()
    
    this.mostrarNotificacion('El Producto se guardó exitosamente');

  }

}
