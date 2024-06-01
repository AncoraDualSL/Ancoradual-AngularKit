import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdualFieldComponent } from './adual-field.component';

describe('AdualFieldComponent', () => {
  let component: AdualFieldComponent;
  let fixture: ComponentFixture<AdualFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdualFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdualFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
