import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJoursFeriesManagerComponent } from './page-jours-feries-manager.component';

describe('PageJoursFeriesManagerComponent', () => {
  let component: PageJoursFeriesManagerComponent;
  let fixture: ComponentFixture<PageJoursFeriesManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageJoursFeriesManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJoursFeriesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
