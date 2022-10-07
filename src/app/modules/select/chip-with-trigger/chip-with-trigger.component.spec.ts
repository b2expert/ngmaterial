import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipWithTriggerComponent } from './chip-with-trigger.component';

describe('ChipWithTriggerComponent', () => {
  let component: ChipWithTriggerComponent;
  let fixture: ComponentFixture<ChipWithTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipWithTriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipWithTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
