import { TestBed } from '@angular/core/testing';

import { TruthService } from './truth.service';

describe('TruthService', () => {
  let service: TruthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TruthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
