import { TestBed } from '@angular/core/testing';

import { AppiserviceService } from './appiservice.service';

describe('AppiserviceService', () => {
  let service: AppiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
