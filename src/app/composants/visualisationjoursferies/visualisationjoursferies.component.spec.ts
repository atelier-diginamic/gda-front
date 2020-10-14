import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualisationjoursferiesComponent } from './visualisationjoursferies.component';

describe('VisualisationjoursferiesComponent', () => {
  let component: VisualisationjoursferiesComponent;
  let fixture: ComponentFixture<VisualisationjoursferiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualisationjoursferiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualisationjoursferiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
