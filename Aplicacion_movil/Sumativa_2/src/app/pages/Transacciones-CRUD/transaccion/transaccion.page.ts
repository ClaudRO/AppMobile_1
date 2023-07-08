import { Component } from '@angular/core';
import { SproveedoresService } from '../../../services/sproveedores.service';
import { Iproveedores } from '../../../interfaces/iproveedores';
import { Iproductos } from '../../../interfaces/iproductos';
import { SproductosService } from '../../../services/sproductos.service';
import { StransaccionesService } from '../../../services/stransacciones.service';
import { Itransaccion } from '../../../interfaces/itransaccion';
import { Itransacciones } from '../../../interfaces/itransacciones';
import { CredencialesInicioService } from 'src/app/services/credenciales-inicio.service';
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
    productos: [],
    valorTotal:0
  };
  proveedorSeleccionado: string = '';
  transaccionValida: boolean = false;

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
      total:0
    };
    this.productosSeleccionados.push(productoSeleccionado);
    this.productos = this.productos.filter((p) => p.id !== producto.id);
    this.calcularTotalProducto(productoSeleccionado);
    this.calcularTotalTransaccion(); // Calcular el total de la transacción

  }
  calcularTotalProducto(producto: Iproductos) {
    producto.total = producto.cantidad * producto.valor;
  }
  calcularTotalTransaccion() {
    let totalTransaccion = 0;
    for (const producto of this.productosSeleccionados) {
      totalTransaccion += producto.total;
    }
    this.newTransaccion.valorTotal = totalTransaccion;
  }
  anularProducto(producto: Iproductos) {
    this.productosSeleccionados = this.productosSeleccionados.filter(p => p.id !== producto.id);
    this.productos.push(producto);
    this.calcularTotalTransaccion(); // Calcular el total de la transacción

  }

  guardarDatos() 
  {
    const productosSinCantidad = this.productosSeleccionados.filter(producto => producto.cantidad <= 0);
    const productosSinValor = this.productosSeleccionados.filter(producto => producto.valor <= 0);

    if (!this.proveedorSeleccionado) {
      this.mostrarNotificacion('Debes seleccionar un proveedor antes de guardar la transacción.');
      
      return;
    }else if (this.productosSeleccionados.length === 0) {
      this.mostrarNotificacion('Debes seleccionar al menos un producto antes de guardar la transacción.');
      return;
    }else if(productosSinCantidad.length > 0) {
      this.mostrarNotificacion('Debes ingresar una cantidad válida para todos los productos seleccionados.');
      return;
    }else if(productosSinValor.length > 0) {
      this.mostrarNotificacion('Debes ingresar un valor válido para todos los productos seleccionados.');
      return;
    
    }else{
            this.newTransaccion.proveedor = this.proveedorSeleccionado;
            this.newTransaccion.productos = this.productosSeleccionados;
            
            // Llamar al servicio para guardar la transacción
            this.transaccionesServ.crearTransaccion(this.newTransaccion).subscribe(
              (resp) => {
                console.log('Transacción guardada:', resp);
                this.getCredenciales();
                this.loadProveedores();
                this.loadProductos();
                this.productosSeleccionados=[];
                this.proveedorSeleccionado="";
                this.newTransaccion.valorTotal=0;
                this.mostrarNotificacion('La transacción se guardó exitosamente');
                // Aquí puedes agregar lógica adicional
              },
              (error) => {
                console.error('Error al guardar la transacción:', error);
                // Manejar el error adecuadamente
              }
            );
          }
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
