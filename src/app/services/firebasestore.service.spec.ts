import { TestBed } from '@angular/core/testing';

import { FirebasestoreService } from './firebasestore.service';

describe('FirebasestoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebasestoreService = TestBed.get(FirebasestoreService);
    expect(service).toBeTruthy();
  });
});
