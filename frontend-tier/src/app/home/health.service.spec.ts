import { TestBed } from '@angular/core/testing';

import { HealthService } from './health.service';

describe('HealthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealthService = TestBed.get(HealthService);
    expect(service).toBeTruthy();
  });
});
