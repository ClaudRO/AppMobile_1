import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTransaccionPage } from './add-transaccion.page';

describe('AddTransaccionPage', () => {
  let component: AddTransaccionPage;
  let fixture: ComponentFixture<AddTransaccionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddTransaccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
