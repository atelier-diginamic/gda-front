import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisuAbsencesComponent } from './visu-absences.component';

describe('VisuAbsencesComponent', () => {
  let component: VisuAbsencesComponent;
  let fixture: ComponentFixture<VisuAbsencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisuAbsencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisuAbsencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
