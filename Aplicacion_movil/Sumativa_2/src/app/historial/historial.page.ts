import { Component } from '@angular/core';
import { Itransaccion } from '../interfaces/itransaccion';
import { StransaccionesService } from '../services/stransacciones.service';
import { Itransacciones } from '../interfaces/itransacciones';
import { CredencialesInicioService } from 'src/services/credenciales-inicio.service';

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

  constructor(
    private transaccionServ: StransaccionesService,
    private credenciales:CredencialesInicioService
    ) {}

  ionViewWillEnter() {
    this.getCredenciales();
    this.loadTransacciones();
  }
  loadTransacciones() {
    if (!isNaN(this.idusuario)) {
      this.transaccionServ.listarTransacciones(this.idusuario).subscribe({
        next: (resp) => {
          this.transacciones = resp;
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

  
}
