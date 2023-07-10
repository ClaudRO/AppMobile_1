import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AuthenticationServiceService', () => {
  let service: AuthenticationService;

  beforeEach(() => {

    TestBed.configureTestingModule({imports: [HttpClientModule],
      providers: [HttpClient],});
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
