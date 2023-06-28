import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailProveedorPage } from './detail-proveedor.page';

describe('DetailProveedorPage', () => {
  let component: DetailProveedorPage;
  let fixture: ComponentFixture<DetailProveedorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailProveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
