import { TestBed, inject } from '@angular/core/testing';

import { IdServiceService } from './id-service.service';

describe('IdServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdServiceService]
    });
  });

  it('should be created', inject([IdServiceService], (service: IdServiceService) => {
    expect(service).toBeTruthy();
  }));
});
