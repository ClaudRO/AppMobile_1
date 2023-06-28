import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProveedorPage } from './add-proveedor.page';

describe('AddProveedorPage', () => {
  let component: AddProveedorPage;
  let fixture: ComponentFixture<AddProveedorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddProveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
