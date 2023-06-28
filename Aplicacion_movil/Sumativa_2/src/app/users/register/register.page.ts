import { Component, OnInit } from '@angular/core';
import { Iusuario } from 'src/app/interfaces/iusuario';
import { SUsuariosService } from 'src/app/services/s-usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  newUsuario: Iusuario={
    nombre:"",
    apellido:"",
    contrasenia:"",
    fechaDeNacimiento: new Date(1998, 11, 23),
    tipo_usuario:"",
    correo:"",
    numeroCelular:NaN,
    

  }
  constructor(private servicioUser:SUsuariosService) {}

  ngOnInit() {
  }
  crearUsuario(){
    this.servicioUser.crearUsuario(this.newUsuario).subscribe()
  }
}


  
  


