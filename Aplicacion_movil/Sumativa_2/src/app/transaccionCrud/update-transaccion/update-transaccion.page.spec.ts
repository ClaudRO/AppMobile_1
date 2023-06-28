import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateTransaccionPage } from './update-transaccion.page';

describe('UpdateTransaccionPage', () => {
  let component: UpdateTransaccionPage;
  let fixture: ComponentFixture<UpdateTransaccionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateTransaccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
