import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {


  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [RouterTestingModule.withRoutes([])],
    }).compileComponents();
  });

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have menu labels', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-label');
    expect(menuItems.length).toEqual(7);
    expect(menuItems[0].textContent).toContain('Inicio');
    expect(menuItems[1].textContent).toContain('Historial');
    expect(menuItems[2].textContent).toContain('transaccion');
    expect(menuItems[3].textContent).toContain('Productos');
    expect(menuItems[4].textContent).toContain('Proveedores');
    expect(menuItems[5].textContent).toContain('Mis datos');
    expect(menuItems[6].textContent).toContain('Login');
    
  });

  it('should have urls', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-item');
    expect(menuItems.length).toEqual(7);
    expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual('inicio');
    expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual('historial');
    expect(menuItems[2].getAttribute('ng-reflect-router-link')).toEqual('transaccion');
    expect(menuItems[3].getAttribute('ng-reflect-router-link')).toEqual('productos');
    expect(menuItems[4].getAttribute('ng-reflect-router-link')).toEqual('provedores');
    expect(menuItems[5].getAttribute('ng-reflect-router-link')).toEqual('mis-datos');
    expect(menuItems[6].getAttribute('ng-reflect-router-link')).toEqual('login');
  });
 
});
