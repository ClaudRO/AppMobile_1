import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LisTransaccionPage } from './lis-transaccion.page';

describe('LisTransaccionPage', () => {
  let component: LisTransaccionPage;
  let fixture: ComponentFixture<LisTransaccionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LisTransaccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
