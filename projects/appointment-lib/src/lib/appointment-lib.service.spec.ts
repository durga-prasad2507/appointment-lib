import { TestBed } from '@angular/core/testing';

import { AppointmentLibService } from './appointment-lib.service';

describe('AppointmentLibService', () => {
  let service: AppointmentLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointmentLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
