import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioPage } from './inicio.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common'; // Importa el módulo CommonModule

describe('InicioPage', () => {
  let component: InicioPage;
  let fixture: ComponentFixture<InicioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioPage],
      imports: [HttpClientTestingModule, CommonModule], // Agrega CommonModule a los imports
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
