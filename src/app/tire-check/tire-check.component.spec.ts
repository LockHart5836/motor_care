import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TireCheckComponent } from './tire-check.component';

describe('TireCheckComponent', () => {
  let component: TireCheckComponent;
  let fixture: ComponentFixture<TireCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TireCheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TireCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
