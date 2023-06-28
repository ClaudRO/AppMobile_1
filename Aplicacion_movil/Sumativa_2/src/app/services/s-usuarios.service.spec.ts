import { TestBed } from '@angular/core/testing';

import { SUsuariosService } from './s-usuarios.service';

describe('SUsuariosService', () => {
  let service: SUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
