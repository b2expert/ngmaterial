import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDynamicComponent } from './reactive-dynamic.component';

describe('ReactiveDynamicComponent', () => {
  let component: ReactiveDynamicComponent;
  let fixture: ComponentFixture<ReactiveDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
