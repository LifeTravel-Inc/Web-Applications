import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyDestinoComponent } from './agency-destino.component';

describe('AgencyDestinoComponent', () => {
  let component: AgencyDestinoComponent;
  let fixture: ComponentFixture<AgencyDestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgencyDestinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyDestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
