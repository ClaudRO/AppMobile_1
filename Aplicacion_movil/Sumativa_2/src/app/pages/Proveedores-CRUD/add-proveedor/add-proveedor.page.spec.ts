import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProveedorPage } from './add-proveedor.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AddProveedorPage', () => {
  let component: AddProveedorPage;
  let fixture: ComponentFixture<AddProveedorPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({imports: [HttpClientModule],
      providers: [HttpClient],});
    fixture = TestBed.createComponent(AddProveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
