import { TestBed } from '@angular/core/testing';

import { BusinessHourService } from './business-hour.service';

describe('BusinessHourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusinessHourService = TestBed.get(BusinessHourService);
    expect(service).toBeTruthy();
  });
});
