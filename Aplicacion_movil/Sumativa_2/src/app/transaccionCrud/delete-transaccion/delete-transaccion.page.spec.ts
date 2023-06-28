import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteTransaccionPage } from './delete-transaccion.page';

describe('DeleteTransaccionPage', () => {
  let component: DeleteTransaccionPage;
  let fixture: ComponentFixture<DeleteTransaccionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteTransaccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
