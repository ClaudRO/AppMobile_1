import { Component, OnInit } from '@angular/core';
import { Iproveedores } from '../../interfaces/iproveedores';
import { SproveedoresService } from '../../services/sproveedores.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { Iproveedor } from '../../interfaces/iproveedor';
import { CredencialesInicioService } from 'src/services/credenciales-inicio.service';

@Component({
  selector: 'app-provedores',
  templateUrl: './provedores.page.html',
  styleUrls: ['./provedores.page.scss'],
})
export class ProvedoresPage {
  showSearchField: boolean = false;
  searchText: string = '';
  proveedores: Iproveedores[] = [];
  idusuario: number = NaN;
  constructor(
    private proveedoresS:SproveedoresService,
    private credenciales: CredencialesInicioService
    ) { }

  ionViewWillEnter() {
    this.getCredenciales();
    this.loadProveedores();
    
  }

  getCredenciales() {
    this.idusuario = this.credenciales.getIdUsuario() as number;
  }

  loadProveedores() {
    if (!isNaN(this.idusuario)) {
      this.proveedoresS.listarProveedores(this.idusuario).subscribe({
        next: (resp) => {
          this.proveedores = resp;
        },
        error: (err) => {
          console.log(err.message);
        },
      });
    }
  }
  filterProveedores(): Iproveedores[] {
    if (!this.searchText) {
      return this.proveedores;
    }
  
    const searchTerm = this.searchText.toLowerCase();
    return this.proveedores.filter(proveedor =>
      proveedor.nombre.toLowerCase().includes(searchTerm) ||
      proveedor.descripcion.toLowerCase().includes(searchTerm)
    );
  }
}
