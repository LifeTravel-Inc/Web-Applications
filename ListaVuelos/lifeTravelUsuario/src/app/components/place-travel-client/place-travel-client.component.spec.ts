import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceTravelClientComponent } from './place-travel-client.component';

describe('PlaceTravelClientComponent', () => {
  let component: PlaceTravelClientComponent;
  let fixture: ComponentFixture<PlaceTravelClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceTravelClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceTravelClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
