import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobControlComponent } from './dob-control.component';

describe('DobControlComponent', () => {
  let component: DobControlComponent;
  let fixture: ComponentFixture<DobControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DobControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DobControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
