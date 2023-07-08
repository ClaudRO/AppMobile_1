import { Component, OnInit } from '@angular/core';
import { CredencialesInicioService } from 'src/app/services/credenciales-inicio.service';
import { Iusuarios } from '../../interfaces/iusuarios';
import { SUsuariosService } from '../../services/s-usuarios.service';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.page.html',
  styleUrls: ['./mis-datos.page.scss'],
})
export class MisDatosPage implements OnInit {
  idusuario: number = NaN;
 
  usuario: Iusuarios = {
    id: NaN,
    nombre: "",
    apellido: "",
    contrasenia: "",
    fechaDeNacimiento: new Date(1998, 11, 23),
    tipo_usuario: "",
    correo: "",
    numeroCelular: NaN,
  };
  editarActivado: boolean = false;
  mostrarBotones: boolean = false;

  constructor(
    private credenciales: CredencialesInicioService,
    private serviciousuario: SUsuariosService
  ) { }

  ngOnInit() {
    this.getCredenciales();
    this.loadUsuario();
  }

  loadUsuario() {
    if (!isNaN(this.idusuario)) {
      this.serviciousuario.listarUsuario(this.idusuario).subscribe({
        next: (resp) => {
          this.usuario = resp[0];
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

  toggleEdicion() {
    this.editarActivado = !this.editarActivado;
    this.mostrarBotones = this.editarActivado;
  }

  confirmarCambios() {
    this.mostrarBotones = false;
    this.actualizarUsuario();
  }

  actualizarUsuario() {
    this.serviciousuario.actualizarUsuario(this.usuario).subscribe({
      next: (resp) => {
        console.log('Usuario actualizado:', resp);
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }
}
