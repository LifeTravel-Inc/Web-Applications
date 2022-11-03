import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesClientComponent } from './places-client.component';

describe('PlacesClientComponent', () => {
  let component: PlacesClientComponent;
  let fixture: ComponentFixture<PlacesClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
