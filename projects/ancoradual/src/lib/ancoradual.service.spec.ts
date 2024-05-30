import { TestBed } from '@angular/core/testing';

import { AncoradualService } from './ancoradual.service';

describe('AncoradualService', () => {
  let service: AncoradualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AncoradualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
