import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegistrationAgencyComponent } from './login-registration-agency.component';

describe('LoginRegistrationAgencyComponent', () => {
  let component: LoginRegistrationAgencyComponent;
  let fixture: ComponentFixture<LoginRegistrationAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegistrationAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginRegistrationAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
