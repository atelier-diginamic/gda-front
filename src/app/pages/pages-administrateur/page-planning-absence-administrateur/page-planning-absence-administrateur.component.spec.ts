import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlanningAbsenceAdministrateurComponent } from './page-planning-absence-administrateur.component';

describe('PagePlanningAbsenceAdministrateurComponent', () => {
  let component: PagePlanningAbsenceAdministrateurComponent;
  let fixture: ComponentFixture<PagePlanningAbsenceAdministrateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePlanningAbsenceAdministrateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePlanningAbsenceAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
