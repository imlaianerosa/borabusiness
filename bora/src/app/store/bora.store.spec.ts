import { TestBed } from '@angular/core/testing';

import { BoraStore } from './bora.store';

describe('BoraStoreTsService', () => {
  let service: BoraStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoraStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
