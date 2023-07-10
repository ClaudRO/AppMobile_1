import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailProveedorPage } from './detail-proveedor.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('DetailProveedorPage', () => {
  let component: DetailProveedorPage;
  let fixture: ComponentFixture<DetailProveedorPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({imports: [HttpClientModule],
      providers: [HttpClient],});
    fixture = TestBed.createComponent(DetailProveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
