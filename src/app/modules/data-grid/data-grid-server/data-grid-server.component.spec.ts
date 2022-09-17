import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridServerComponent } from './data-grid-server.component';

describe('DataGridServerComponent', () => {
  let component: DataGridServerComponent;
  let fixture: ComponentFixture<DataGridServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataGridServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataGridServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
