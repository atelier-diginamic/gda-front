import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesVisualisationAbsencesComponent } from './pages-visualisation-absences.component';

describe('PagesVisualisationAbsencesComponent', () => {
  let component: PagesVisualisationAbsencesComponent;
  let fixture: ComponentFixture<PagesVisualisationAbsencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesVisualisationAbsencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesVisualisationAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
