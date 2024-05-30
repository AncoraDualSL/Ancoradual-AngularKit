import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncoradualFormFieldComponent } from './ancoradual-form-field.component';

describe('AncoradualFormFieldComponent', () => {
  let component: AncoradualFormFieldComponent;
  let fixture: ComponentFixture<AncoradualFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AncoradualFormFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AncoradualFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
