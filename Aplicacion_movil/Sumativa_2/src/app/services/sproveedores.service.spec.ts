import { TestBed } from '@angular/core/testing';

import { SproveedoresService } from './sproveedores.service';

describe('SproveedoresService', () => {
  let service: SproveedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SproveedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
