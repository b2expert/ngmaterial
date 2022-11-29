import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWithModelComponent } from './select-with-model.component';

describe('SelectWithModelComponent', () => {
  let component: SelectWithModelComponent;
  let fixture: ComponentFixture<SelectWithModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectWithModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectWithModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
