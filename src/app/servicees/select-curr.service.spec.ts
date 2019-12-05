import { TestBed } from '@angular/core/testing';

import { SelectCurrService } from './select-curr.service';

describe('SelectCurrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectCurrService = TestBed.get(SelectCurrService);
    expect(service).toBeTruthy();
  });
});
