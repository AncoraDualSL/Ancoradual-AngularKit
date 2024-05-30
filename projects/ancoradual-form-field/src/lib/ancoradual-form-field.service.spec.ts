import { TestBed } from '@angular/core/testing';

import { AncoradualFormFieldService } from './ancoradual-form-field.service';

describe('AncoradualFormFieldService', () => {
  let service: AncoradualFormFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AncoradualFormFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
