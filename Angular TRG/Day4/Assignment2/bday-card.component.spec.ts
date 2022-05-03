import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdayCardComponent } from './bday-card.component';

describe('BdayCardComponent', () => {
  let component: BdayCardComponent;
  let fixture: ComponentFixture<BdayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BdayCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BdayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
