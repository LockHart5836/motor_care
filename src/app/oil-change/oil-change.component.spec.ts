import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilChangeComponent } from './oil-change.component';

describe('OilChangeComponent', () => {
  let component: OilChangeComponent;
  let fixture: ComponentFixture<OilChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OilChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OilChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
