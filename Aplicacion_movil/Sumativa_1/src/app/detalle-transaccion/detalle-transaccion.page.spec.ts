import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleTransaccionPage } from './detalle-transaccion.page';

describe('DetalleTransaccionPage', () => {
  let component: DetalleTransaccionPage;
  let fixture: ComponentFixture<DetalleTransaccionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleTransaccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
