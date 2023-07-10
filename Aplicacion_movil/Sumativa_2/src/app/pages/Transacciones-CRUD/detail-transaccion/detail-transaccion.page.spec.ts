import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailTransaccionPage } from './detail-transaccion.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

describe('DetailTransaccionPage', () => {
  let component: DetailTransaccionPage;
  let fixture: ComponentFixture<DetailTransaccionPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({imports: [HttpClientModule, CommonModule],
      providers: [HttpClient],});
    fixture = TestBed.createComponent(DetailTransaccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
