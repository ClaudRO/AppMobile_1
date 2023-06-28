import { Component } from '@angular/core';
import { SproveedoresService } from '../services/sproveedores.service';
import { Iproveedores } from '../interfaces/iproveedores';
import { Iproductos } from '../interfaces/iproductos';
import { SproductosService } from '../services/sproductos.service';
import { StransaccionesService } from '../services/stransacciones.service';
import { Itransaccion } from '../interfaces/itransaccion';
import { Itransacciones } from '../interfaces/itransacciones';
import { CredencialesInicioService } from 'src/services/credenciales-inicio.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.page.html',
  styleUrls: ['./transaccion.page.scss'],
})
export class TransaccionPage {
  cantidadProducto: number = 0;
  precioProducto: number = 0;
  idusuario: number = NaN;
  showSearchField: boolean = false;

  proveedores: Iproveedores[] = [];
  productos: Iproductos[] = [];
  productosSeleccionados: Iproductos[] = [];
  searchText: string = '';
  newTransaccion: Itransaccion = {
    idUsuario:NaN,
    fecha: new Date(),
    proveedor: "",
    productos: []
  };
  proveedorSeleccionado: string = '';

  constructor(
    private proveedoresServ: SproveedoresService,
    private productosServ: SproductosService,
    private transaccionesServ: StransaccionesService,
    private credenciales:CredencialesInicioService,
    private toastController: ToastController
  ) {}

  ionViewWillEnter() {
    this.getCredenciales();
    this.loadProveedores();
    this.loadProductos();
  }
  loadProveedores() {
    if (!isNaN(this.idusuario)) {
      this.proveedoresServ.listarProveedores(this.idusuario).subscribe({
        next: (resp) => {
          this.proveedores = resp;
        },
        error: (err) => {
          console.log(err.message);
        },
      });
    }
  }
  loadProductos() {
    if (!isNaN(this.idusuario)) {
      this.productosServ.listarProductos(this.idusuario).subscribe({
        next: (resp) => {
          this.productos = resp;
        },
        error: (err) => {
          console.log(err.message);
        },
      });
    }
  }

  getCredenciales() {
    this.idusuario = this.credenciales.getIdUsuario() as number;
    this.newTransaccion.idUsuario=this.idusuario
  }
  

  filterProductos(): Iproductos[] {
    if (!this.searchText) {
      return this.productos;
    }

    const searchTerm = this.searchText.toLowerCase();
    return this.productos.filter(
      (producto) =>
        producto.nombre.toLowerCase().includes(searchTerm) ||
        producto.descripcion.toLowerCase().includes(searchTerm)
    );
  }

  agregarProducto(producto: Iproductos) {
    const productoSeleccionado: Iproductos = {
      id: producto.id,
      idUsuario: producto.idUsuario,
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      cantidad: 0,
      valor: 0,
    };
    this.productosSeleccionados.push(productoSeleccionado);
    this.productos = this.productos.filter((p) => p.id !== producto.id);
  }
  

  guardarDatos() {
    this.newTransaccion.proveedor = this.proveedorSeleccionado;
    this.newTransaccion.productos = this.productosSeleccionados;
    console.log('Nueva Transacción:', this.newTransaccion);
  
    // Llamar al servicio para guardar la transacción
    this.transaccionesServ.crearTransaccion(this.newTransaccion).subscribe(
      (resp) => {
        console.log('Transacción guardada:', resp);
        this.getCredenciales();
        this.loadProveedores();
        this.loadProductos();
        this.productosSeleccionados=[];
        this.proveedorSeleccionado="";
        this.mostrarNotificacion('La transacción se guardó exitosamente');
        // Aquí puedes agregar lógica adicional
      },
      (error) => {
        console.error('Error al guardar la transacción:', error);
        // Manejar el error adecuadamente
      }
    );
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

  decrementarCantidad(producto: Iproductos) {
    if (producto.cantidad > 0) {
      producto.cantidad--;
    }
  }

  incrementarCantidad(producto: Iproductos) {
    producto.cantidad++;
  }
}
