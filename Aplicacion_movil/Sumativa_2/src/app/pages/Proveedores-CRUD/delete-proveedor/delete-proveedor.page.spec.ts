import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteProveedorPage } from './delete-proveedor.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('DeleteProveedorPage', () => {
  let component: DeleteProveedorPage;
  let fixture: ComponentFixture<DeleteProveedorPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({imports: [HttpClientModule],
      providers: [HttpClient],});
    fixture = TestBed.createComponent(DeleteProveedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
