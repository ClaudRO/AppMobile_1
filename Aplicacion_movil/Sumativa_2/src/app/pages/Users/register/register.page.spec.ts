import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common'; // Importa el módulo CommonModule

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterPage],
      imports: [HttpClientTestingModule, CommonModule], // Agrega CommonModule a los imports
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
