import { TestBed } from '@angular/core/testing';

import { DestinoService } from './destino.service';

describe('DestinoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DestinoService = TestBed.get(DestinoService);
    expect(service).toBeTruthy();
  });
});
