import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridClientComponent } from './data-grid-client.component';

describe('DataGridClientComponent', () => {
  let component: DataGridClientComponent;
  let fixture: ComponentFixture<DataGridClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataGridClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataGridClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
