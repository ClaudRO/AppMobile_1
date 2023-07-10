import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisDatosPage } from './mis-datos.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule si estás utilizando componentes de Ionic

describe('MisDatosPage', () => {
  let component: MisDatosPage;
  let fixture: ComponentFixture<MisDatosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, CommonModule, IonicModule.forRoot()], // Asegúrate de importar IonicModule si estás utilizando componentes de Ionic
      providers: [HttpClient],
      declarations: [MisDatosPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisDatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
