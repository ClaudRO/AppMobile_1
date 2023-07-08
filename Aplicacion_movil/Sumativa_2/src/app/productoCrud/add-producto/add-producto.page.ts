import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  	valor: 0,
    total:0
  }
  constructor(
    private productoServ:SproductosService,
    private credencialesService:CredencialesInicioService,
    private toastController: ToastController,
    private router:Router
  ) { }

  ngOnInit() {
    this.obtenerCredenciales();
    this.newProducto.idUsuario=this.idusuario
  }
  async mostrarNotificacion(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000, // Duración en milisegundos
      position:'bottom', // Posición de la notificación
      color: "tertiary"
    });
    toast.present();
  }
  obtenerCredenciales() {
    this.idusuario = this.credencialesService.getIdUsuario(); // Corrección aquí
  }
  crearProducto()
  {
    if (!this.newProducto.nombre) 
    {
        this.mostrarNotificacion('El nombre del producto no puede estar vacío.');
        return;
    }else{
      this.productoServ.nombresReptidosProductos(this.newProducto.nombre,this.idusuario).subscribe(async (correoValido: boolean) => 
      {
        console.log(correoValido);
        if(correoValido){
          this.productoServ.crearProducto(this.newProducto).subscribe();
          this.mostrarNotificacion('El Producto se guardó exitosamente');
          this.router.navigateByUrl('/productos');
        }else {
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

}
