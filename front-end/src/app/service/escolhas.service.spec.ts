import { TestBed } from '@angular/core/testing';

import { EscolhasService } from './escolhas.service';

describe('EscolhasService', () => {
  let service: EscolhasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscolhasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
