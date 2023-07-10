import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransaccionPage } from './transaccion.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common'; // Importa el módulo CommonModule

describe('TransaccionPage', () => {
  let component: TransaccionPage;
  let fixture: ComponentFixture<TransaccionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransaccionPage],
      imports: [HttpClientTestingModule, CommonModule], // Agrega CommonModule a los imports
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
