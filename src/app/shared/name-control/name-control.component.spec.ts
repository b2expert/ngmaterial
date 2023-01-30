import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameControlComponent } from './name-control.component';

describe('NameControlComponent', () => {
  let component: NameControlComponent;
  let fixture: ComponentFixture<NameControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
