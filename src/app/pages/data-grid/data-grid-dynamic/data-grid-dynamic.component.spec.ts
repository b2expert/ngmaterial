import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridDynamicComponent } from './data-grid-dynamic.component';

describe('DataGridDynamicComponent', () => {
  let component: DataGridDynamicComponent;
  let fixture: ComponentFixture<DataGridDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataGridDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataGridDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
