import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoDialogComponent } from './destino-dialog.component';

describe('DestinoDialogComponent', () => {
  let component: DestinoDialogComponent;
  let fixture: ComponentFixture<DestinoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
