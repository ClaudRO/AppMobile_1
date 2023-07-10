import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProductoPage } from './add-producto.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AddProductoPage', () => {
  let component: AddProductoPage;
  let fixture: ComponentFixture<AddProductoPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({imports: [HttpClientModule],
      providers: [HttpClient],});
    fixture = TestBed.createComponent(AddProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
