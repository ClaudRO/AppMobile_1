import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailTransaccionPage } from './detail-transaccion.page';

describe('DetailTransaccionPage', () => {
  let component: DetailTransaccionPage;
  let fixture: ComponentFixture<DetailTransaccionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailTransaccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
