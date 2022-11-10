import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcartComponent } from './ecart.component';

describe('EcartComponent', () => {
  let component: EcartComponent;
  let fixture: ComponentFixture<EcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
