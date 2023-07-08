import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { environment } from 'src/environments/environment';
import { SUsuariosService } from 'src/app/services/s-usuarios.service';
import { Iusuarios } from 'src/app/interfaces/iusuarios';

describe('SUsuariosService', () => {
  let service: SUsuariosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SUsuariosService]
    });
    service = TestBed.inject(SUsuariosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should filter and return a list of users by ID', () => {
    const idUsuario = 1;
    const mockUsuarios: Iusuarios[] = [
      { id: 1, nombre: 'Usuario 1', apellido: 'Apellido 1',contrasenia:'contrasenia1',fechaDeNacimiento:new Date(1998, 10, 26),tipo_usuario:'user',correo:'correo1@gmail.com',numeroCelular:111111111 },
      { id: 2, nombre: 'Usuario 2', apellido: 'Apellido 2',contrasenia:'contrasenia2',fechaDeNacimiento:new Date(1998, 11, 26),tipo_usuario:'user2',correo:'correo2@gmail.com',numeroCelular:22222222  },
      { id: 3, nombre: 'Usuario 3', apellido: 'Apellido 3',contrasenia:'contrasenia3',fechaDeNacimiento:new Date(1998, 12, 26),tipo_usuario:'user3',correo:'correo3@gmail.com',numeroCelular:33333333  }
    ];

    service.listarUsuario(idUsuario).subscribe((usuarios: Iusuarios[]) => {
      expect(usuarios.length).toBe(1);
      expect(usuarios[0].id).toBe(idUsuario);
      expect(usuarios[0].nombre).toBe('Usuario 1');
      expect(usuarios[0].apellido).toBe('Apellido 1');
      expect(usuarios[0].contrasenia).toBe('contrasenia1');
      expect(usuarios[0].fechaDeNacimiento).toEqual(new Date(1998, 10, 26));
      expect(usuarios[0].tipo_usuario).toBe('user');
      expect(usuarios[0].numeroCelular).toBe(111111111);
    });

    const req = httpMock.expectOne(`${environment.apiURL}/usuarios`);
    expect(req.request.method).toBe('GET');

    req.flush(mockUsuarios);
  });
});
