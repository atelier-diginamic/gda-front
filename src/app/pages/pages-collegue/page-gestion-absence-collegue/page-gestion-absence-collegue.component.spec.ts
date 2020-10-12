import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGestionAbsenceCollegueComponent } from './page-gestion-absence-collegue.component';

describe('PageGestionAbsenceCollegueComponent', () => {
  let component: PageGestionAbsenceCollegueComponent;
  let fixture: ComponentFixture<PageGestionAbsenceCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGestionAbsenceCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGestionAbsenceCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
