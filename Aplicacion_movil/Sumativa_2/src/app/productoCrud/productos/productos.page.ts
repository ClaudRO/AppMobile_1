import { Component } from '@angular/core';
import { SproductosService } from '../../services/sproductos.service';
import { Iproductos } from '../../interfaces/iproductos';
import { CredencialesInicioService } from 'src/services/credenciales-inicio.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage {
  productos: Iproductos[] = [];
  searchText: string = '';

  idusuario: number = NaN;

  constructor(
    private productosServ: SproductosService,
    private credencialesService: CredencialesInicioService
  ) {}

  ionViewWillEnter() {
    this.getCredenciales();
    this.loadProductos();
  }

  getCredenciales() {
    this.idusuario = this.credencialesService.getIdUsuario() as number;
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
}
