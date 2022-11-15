import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcFilterComponent } from './dgc-filter.component';

describe('DgcFilterComponent', () => {
  let component: DgcFilterComponent;
  let fixture: ComponentFixture<DgcFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
