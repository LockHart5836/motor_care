import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainServiceComponent } from './chain-service.component';

describe('ChainServiceComponent', () => {
  let component: ChainServiceComponent;
  let fixture: ComponentFixture<ChainServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChainServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChainServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
