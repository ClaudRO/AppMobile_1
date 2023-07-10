import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialPage } from './historial.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';

describe('HistorialPage', () => {
  let component: HistorialPage;
  let fixture: ComponentFixture<HistorialPage>;

  beforeEach(async() => {
    TestBed.configureTestingModule({imports: [HttpClientModule, CommonModule,IonicModule],
      providers: [HttpClient, DatePipe], declarations: [HistorialPage],}).compileComponents();
    fixture = TestBed.createComponent(HistorialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
