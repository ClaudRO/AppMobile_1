import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteProductoPage } from './delete-producto.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('DeleteProductoPage', () => {
  let component: DeleteProductoPage;
  let fixture: ComponentFixture<DeleteProductoPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({imports: [HttpClientModule],
      providers: [HttpClient],});
    fixture = TestBed.createComponent(DeleteProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
