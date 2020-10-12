import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJoursFeriesAdministrateurComponent } from './page-jours-feries-administrateur.component';

describe('PageJoursFeriesAdministrateurComponent', () => {
  let component: PageJoursFeriesAdministrateurComponent;
  let fixture: ComponentFixture<PageJoursFeriesAdministrateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageJoursFeriesAdministrateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJoursFeriesAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
