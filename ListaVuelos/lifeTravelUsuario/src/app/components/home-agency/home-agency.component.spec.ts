import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAgencyComponent } from './home-agency.component';

describe('HomeAgencyComponent', () => {
  let component: HomeAgencyComponent;
  let fixture: ComponentFixture<HomeAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAgencyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
