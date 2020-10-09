import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePlanningAbsenceCollegueComponent } from './page-planning-absence-collegue.component';

describe('PagePlanningAbsenceCollegueComponent', () => {
  let component: PagePlanningAbsenceCollegueComponent;
  let fixture: ComponentFixture<PagePlanningAbsenceCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePlanningAbsenceCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePlanningAbsenceCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
