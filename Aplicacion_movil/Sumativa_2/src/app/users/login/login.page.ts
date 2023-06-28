import { Component, OnInit } from '@angular/core';
import { CredencialesInicioService } from '../../../services/credenciales-inicio.service';
import { Iusuarios } from 'src/app/interfaces/iusuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credenciales: Iusuarios = {
    id: 0,
    nombre: "",
    apellido: "",
    contrasenia: "",
    fechaDeNacimiento: new Date(),
    tipo_usuario: "",
    correo: "",
    numeroCelular: NaN,
   
  };

  constructor(private credencialesService: CredencialesInicioService, private router: Router) { }

  ngOnInit() {
    this.resetCampos();
  }

  resetCampos() {
    this.credenciales.correo = '';
    this.credenciales.contrasenia = '';
  }
  login() {
    const { correo, contrasenia } = this.credenciales;

    this.credencialesService.validarCredenciales(correo, contrasenia).subscribe((esValido) => {
      if (esValido) {
        // Las credenciales son válidas, realizar la lógica de inicio de sesión
        this.router.navigate(['/inicio']);
        this.resetCampos();
      } else {
        // Las credenciales son inválidas, mostrar un mensaje de error o tomar alguna acción
        console.log('Credenciales inválidas');
      }
    });
  }
}
