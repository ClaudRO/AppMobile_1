import { TestBed } from '@angular/core/testing';

import { CredencialesInicioService } from './credenciales-inicio.service';

describe('CredencialesInicioService', () => {
  let service: CredencialesInicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CredencialesInicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
