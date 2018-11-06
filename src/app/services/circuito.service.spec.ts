import { TestBed } from '@angular/core/testing';

import { CircuitoService } from './circuito.service';

describe('CircuitoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CircuitoService = TestBed.get(CircuitoService);
    expect(service).toBeTruthy();
  });
});
