import { TestBed } from '@angular/core/testing';

import { ViaCepService } from './via-cep.service';

describe('ViaCepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViaCepService = TestBed.get(ViaCepService);
    expect(service).toBeTruthy();
  });
});
