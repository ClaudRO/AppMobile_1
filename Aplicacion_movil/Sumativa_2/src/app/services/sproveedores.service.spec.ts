import { TestBed } from '@angular/core/testing';

import { SproveedoresService } from './sproveedores.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('SproveedoresService', () => {
  let service: SproveedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientModule],
      providers: [HttpClient],});
    service = TestBed.inject(SproveedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
