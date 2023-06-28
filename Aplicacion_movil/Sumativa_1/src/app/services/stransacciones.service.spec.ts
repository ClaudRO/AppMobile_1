import { TestBed } from '@angular/core/testing';

import { StransaccionesService } from './stransacciones.service';

describe('StransaccionesService', () => {
  let service: StransaccionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StransaccionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
