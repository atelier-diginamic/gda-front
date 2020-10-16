import { TestBed } from '@angular/core/testing';

import { VueDepartementService } from './vue-departement.service';

describe('VueDepartementService', () => {
  let service: VueDepartementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VueDepartementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
