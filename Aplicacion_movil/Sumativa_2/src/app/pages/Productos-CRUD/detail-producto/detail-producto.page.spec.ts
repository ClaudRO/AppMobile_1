import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailProductoPage } from './detail-producto.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('DetailProductoPage', () => {
  let component: DetailProductoPage;
  let fixture: ComponentFixture<DetailProductoPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({imports: [HttpClientModule],
      providers: [HttpClient],});
    fixture = TestBed.createComponent(DetailProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
