import { TestBed } from '@angular/core/testing';

import { WorldbankApiService } from './worldbank-api.service';

describe('WorldbankApiService', () => {
  let service: WorldbankApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldbankApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
