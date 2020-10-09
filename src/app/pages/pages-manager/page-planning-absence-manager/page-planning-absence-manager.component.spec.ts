import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlanningAbsenceManagerComponent } from './page-planning-absence-manager.component';

describe('PagePlanningAbsenceManagerComponent', () => {
  let component: PagePlanningAbsenceManagerComponent;
  let fixture: ComponentFixture<PagePlanningAbsenceManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePlanningAbsenceManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePlanningAbsenceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
