import { TestBed } from '@angular/core/testing';

import { StransaccionesService } from './stransacciones.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('StransaccionesService', () => {
  let service: StransaccionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule],
      providers: [HttpClient],});
    service = TestBed.inject(StransaccionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
