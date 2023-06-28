import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateProveedorPage } from './update-proveedor.page';

describe('UpdateProveedorPage', () => {
  let component: UpdateProveedorPage;
  let fixture: ComponentFixture<UpdateProveedorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateProveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
