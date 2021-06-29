import { TestBed } from '@angular/core/testing';

import { TaskstoreService } from './taskstore.service';

describe('TaskstoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskstoreService = TestBed.get(TaskstoreService);
    expect(service).toBeTruthy();
  });
});
