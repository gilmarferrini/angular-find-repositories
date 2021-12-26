import { TestBed } from '@angular/core/testing';

import { GetRepositoryDetailsResolver } from './get-repository-details.resolver';

describe('GetRepositoryDetailsResolver', () => {
  let resolver: GetRepositoryDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetRepositoryDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
