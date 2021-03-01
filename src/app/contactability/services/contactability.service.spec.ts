import { TestBed } from '@angular/core/testing';

import { ContactabilityService } from './contactability.service';

describe('ContactabilityService', () => {
  let service: ContactabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
