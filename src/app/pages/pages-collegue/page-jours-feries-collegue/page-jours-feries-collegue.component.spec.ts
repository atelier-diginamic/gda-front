import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJoursFeriesCollegueComponent } from './page-jours-feries-collegue.component';

describe('PageJoursFeriesCollegueComponent', () => {
  let component: PageJoursFeriesCollegueComponent;
  let fixture: ComponentFixture<PageJoursFeriesCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageJoursFeriesCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJoursFeriesCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
