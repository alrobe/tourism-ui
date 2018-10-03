import { TestBed, inject } from '@angular/core/testing';

import { TurismoService } from './turismo.service';

describe('TurismoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TurismoService]
    });
  });

  it('should be created', inject([TurismoService], (service: TurismoService) => {
    expect(service).toBeTruthy();
  }));
});
