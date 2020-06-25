import { TestBed } from '@angular/core/testing';

import { CardapioService } from './cardapio.service';

describe('CardapioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardapioService = TestBed.get(CardapioService);
    expect(service).toBeTruthy();
  });
});
