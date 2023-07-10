import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateProductoPage } from './update-producto.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('UpdateProductoPage', () => {
  let component: UpdateProductoPage;
  let fixture: ComponentFixture<UpdateProductoPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({imports: [HttpClientModule],
      providers: [HttpClient],});
    fixture = TestBed.createComponent(UpdateProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
