import { TestBed } from '@angular/core/testing';

import { SproductosService } from './sproductos.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('SproductosService', () => {
  let service: SproductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
  providers: [HttpClient],
    });
    service = TestBed.inject(SproductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
