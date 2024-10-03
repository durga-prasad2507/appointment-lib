import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentLibComponent } from './appointment-lib.component';

describe('AppointmentLibComponent', () => {
  let component: AppointmentLibComponent;
  let fixture: ComponentFixture<AppointmentLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
