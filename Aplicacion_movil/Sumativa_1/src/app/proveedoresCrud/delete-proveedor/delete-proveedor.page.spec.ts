import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteProveedorPage } from './delete-proveedor.page';

describe('DeleteProveedorPage', () => {
  let component: DeleteProveedorPage;
  let fixture: ComponentFixture<DeleteProveedorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteProveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
