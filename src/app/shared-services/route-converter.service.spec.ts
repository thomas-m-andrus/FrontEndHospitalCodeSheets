import { TestBed, inject } from '@angular/core/testing';

import { RouteConverterService } from './route-converter.service';

describe('RouteConverterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteConverterService]
    });
  });

  it('should be created', inject([RouteConverterService], (service: RouteConverterService) => {
    expect(service).toBeTruthy();
  }));
});
