import { TestBed } from '@angular/core/testing';

import { EpsteinService } from './epstein.service';

describe('EpsteinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EpsteinService = TestBed.get(EpsteinService);
    expect(service).toBeTruthy();
  });
});
