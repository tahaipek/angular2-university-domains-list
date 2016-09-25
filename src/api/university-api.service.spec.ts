/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UniversityApiService } from './university-api.service';

describe('Service: UniversityApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UniversityApiService]
    });
  });

  it('should ...', inject([UniversityApiService], (service: UniversityApiService) => {
    expect(service).toBeTruthy();
  }));
});
