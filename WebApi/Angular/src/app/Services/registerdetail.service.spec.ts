import { TestBed } from '@angular/core/testing';

import { RegisterdetailService } from './registerdetail.service';

describe('RegisterdetailService', () => {
  let service: RegisterdetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterdetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
