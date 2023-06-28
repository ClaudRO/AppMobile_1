import { TestBed } from '@angular/core/testing';

import { SproductosService } from './sproductos.service';

describe('SproductosService', () => {
  let service: SproductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SproductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
