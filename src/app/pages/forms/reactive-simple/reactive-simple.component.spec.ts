import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveSimpleComponent } from './reactive-simple.component';

describe('ReactiveSimpleComponent', () => {
  let component: ReactiveSimpleComponent;
  let fixture: ComponentFixture<ReactiveSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
