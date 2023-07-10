import { TestBed } from '@angular/core/testing';

import { CredencialesInicioService } from './credenciales-inicio.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('CredencialesInicioService', () => {
  let service: CredencialesInicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule],
      providers: [HttpClient],});
    service = TestBed.inject(CredencialesInicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
