import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGestionAbsenceAdministrateurComponent } from './page-gestion-absence-administrateur.component';

describe('PageGestionAbsenceAdministrateurComponent', () => {
  let component: PageGestionAbsenceAdministrateurComponent;
  let fixture: ComponentFixture<PageGestionAbsenceAdministrateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageGestionAbsenceAdministrateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGestionAbsenceAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
