import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProvedoresPage } from './provedores.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common'; // Importa el módulo CommonModule

describe('ProvedoresPage', () => {
  let component: ProvedoresPage;
  let fixture: ComponentFixture<ProvedoresPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProvedoresPage],
      imports: [HttpClientTestingModule, CommonModule], // Agrega CommonModule a los imports
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvedoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
