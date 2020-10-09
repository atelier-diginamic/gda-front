import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAbsenceComponent } from './gestion-absence.component';

describe('GestionAbsenceComponent', () => {
  let component: GestionAbsenceComponent;
  let fixture: ComponentFixture<GestionAbsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAbsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
