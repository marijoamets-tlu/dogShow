import { TestBed } from '@angular/core/testing';

import { DogshowsService } from './dogshows.service';

describe('DogshowsService', () => {
  let service: DogshowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogshowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
