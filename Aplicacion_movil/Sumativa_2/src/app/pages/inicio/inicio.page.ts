import { Component, OnInit } from '@angular/core';
import { CredencialesInicioService } from '../../../services/credenciales-inicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage{
  NombreUsuario: string = '';
  id:Number=NaN

  constructor(private credencialesService: CredencialesInicioService, private router:Router) { }

  

  ionViewWillEnter() {
    this.obtenerCredenciales();
  }
  
  obtenerCredenciales() {
    this.NombreUsuario = this.credencialesService.getNombreUsuario();
    this.id= this.credencialesService.getIdUsuario(); // Corrección aquí
  }

  logout() {
    this.credencialesService.setCredenciales("", ""); // Limpiar las credenciales
    this.credencialesService.setNombreUsuario(""); // Limpiar el nombre de usuario
    this.NombreUsuario = ''; // Limpiar la variable en el componente
    this.id=NaN;
    this.router.navigate(['/login']);
  }
}
