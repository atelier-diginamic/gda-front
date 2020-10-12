import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVuesDepartementCollaborateurComponent } from './page-vues-departement-collaborateur.component';

describe('PageVuesDepartementCollaborateurComponent', () => {
  let component: PageVuesDepartementCollaborateurComponent;
  let fixture: ComponentFixture<PageVuesDepartementCollaborateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageVuesDepartementCollaborateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVuesDepartementCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
