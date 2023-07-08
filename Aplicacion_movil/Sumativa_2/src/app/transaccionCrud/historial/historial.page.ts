import { Component } from '@angular/core';
import { Itransaccion } from '../../interfaces/itransaccion';
import { StransaccionesService } from '../../services/stransacciones.service';
import { Itransacciones } from '../../interfaces/itransacciones';
import { CredencialesInicioService } from 'src/services/credenciales-inicio.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage {
  transacciones: Itransacciones[] = [];
  searchText: string = '';
  showSearchField: boolean = false;
  idusuario: number=NaN;
  orderDirection: 'desc' | 'asc' = 'desc'; // Variable para almacenar la dirección de ordenamiento
  orderBy: 'fecha' | 'proveedor' = 'fecha'; // Variable para almacenar el campo de ordenamiento

  constructor(
    private transaccionServ: StransaccionesService,
    private credenciales: CredencialesInicioService,
    private datePipe: DatePipe
  ) {}

  ionViewWillEnter() {
    this.getCredenciales();
    this.loadTransacciones();
  }

  loadTransacciones() {
    if (!isNaN(this.idusuario)) {
      this.transaccionServ.listarTransacciones(this.idusuario).subscribe({
        next: (resp) => {
          let filteredTransacciones = resp;
  
          // Filtrar transacciones según el valor de searchText
          if (this.searchText.trim() !== '') {
            filteredTransacciones = filteredTransacciones.filter((t) => {
              // Filtrar por fecha
              const date = new Date(t.fecha);
              const formattedDate = this.datePipe.transform(date, 'dd-MM-yyyy');
              if (formattedDate && formattedDate.includes(this.searchText.trim())) {
                return true;
              }
  
              // Filtrar por proveedor
              if (t.proveedor.toLowerCase().includes(this.searchText.trim().toLowerCase())) {
                return true;
              }
  
              // Filtrar por producto
              for (const producto of t.productos) {
                if (producto.nombre.toLowerCase().includes(this.searchText.trim().toLowerCase())) {
                  return true;
                }
              }
  
              return false;
            });
          }
  
          // Ordenar transacciones
          filteredTransacciones.sort((a, b) => {
            if (this.orderBy === 'fecha') {
              const dateA = new Date(a.fecha);
              const dateB = new Date(b.fecha);
              if (this.orderDirection === 'desc') {
                return dateB.getTime() - dateA.getTime(); // Orden descendente (más reciente a más antigua)
              } else {
                return dateA.getTime() - dateB.getTime(); // Orden ascendente (más antigua a más reciente)
              }
            } else if (this.orderBy === 'proveedor') {
              if (this.orderDirection === 'desc') {
                return b.proveedor.localeCompare(a.proveedor); // Orden descendente (de Z a A)
              } else {
                return a.proveedor.localeCompare(b.proveedor); // Orden ascendente (de A a Z)
              }
            }
            return 0;
          });
  
          this.transacciones = filteredTransacciones;
        },
        error: (err) => {
          console.log(err.message);
        },
      });
    }
  }
  
  

  getCredenciales() {
    this.idusuario = this.credenciales.getIdUsuario() as number;
  }

  toggleOrderDirection() {
    this.orderDirection = this.orderDirection === 'desc' ? 'asc' : 'desc';
    this.loadTransacciones();
  }
}
