import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncoradualComponent } from './ancoradual.component';

describe('AncoradualComponent', () => {
  let component: AncoradualComponent;
  let fixture: ComponentFixture<AncoradualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AncoradualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AncoradualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
