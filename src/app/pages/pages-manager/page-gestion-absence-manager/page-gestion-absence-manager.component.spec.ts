import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGestionAbsenceManagerComponent } from './page-gestion-absence-manager.component';

describe('PageGestionAbsenceManagerComponent', () => {
  let component: PageGestionAbsenceManagerComponent;
  let fixture: ComponentFixture<PageGestionAbsenceManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGestionAbsenceManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGestionAbsenceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
