import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateProveedorPage } from './update-proveedor.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('UpdateProveedorPage', () => {
  let component: UpdateProveedorPage;
  let fixture: ComponentFixture<UpdateProveedorPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({imports: [HttpClientModule],
      providers: [HttpClient],});
    fixture = TestBed.createComponent(UpdateProveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
