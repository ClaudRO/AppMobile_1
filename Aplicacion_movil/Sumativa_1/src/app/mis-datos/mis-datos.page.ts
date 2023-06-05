import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.page.html',
  styleUrls: ['./mis-datos.page.scss'],
})
export class MisDatosPage implements OnInit {
  usuarioejemplo : string[]=["Juan","Canales","1998/11/26","ejemplo@mail.com","contraseñaejemplo123"];
  editarActivado: boolean = false;
  mostrarBotones: boolean = false;
  confirmarCambios() {
    this.mostrarBotones = false;
  }
  toggleEdicion() {
    this.editarActivado = !this.editarActivado;
    this.mostrarBotones = this.editarActivado;
  }
  constructor() { }

  ngOnInit() {
  }

}
