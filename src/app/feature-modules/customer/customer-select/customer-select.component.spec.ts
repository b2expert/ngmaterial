import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSelectComponent } from './customer-select.component';

describe('CustomerSelectComponent', () => {
  let component: CustomerSelectComponent;
  let fixture: ComponentFixture<CustomerSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
