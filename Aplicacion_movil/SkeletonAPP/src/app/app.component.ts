import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Historial', url: 'historial', icon: 'folder' },
    { title: 'Productos', url: 'productos', icon: 'heart' },
    { title: 'transaccion', url: 'transaccion', icon: 'clipboard' },
    { title: 'Mis datos', url: 'mis-datos', icon: 'person' },
    { title: 'Login', url: 'login', icon: 'log-in' },
    { title: 'Proveedores', url: 'provedores', icon: 'heart' },
  ];
  public labels = [ 'Friends', 'Notes', 'Work'];
  constructor() {}
}
