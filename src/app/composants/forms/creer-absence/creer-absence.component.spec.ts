import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerAbsenceComponent } from './creer-absence.component';

describe('CreerAbsenceComponent', () => {
  let component: CreerAbsenceComponent;
  let fixture: ComponentFixture<CreerAbsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerAbsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
