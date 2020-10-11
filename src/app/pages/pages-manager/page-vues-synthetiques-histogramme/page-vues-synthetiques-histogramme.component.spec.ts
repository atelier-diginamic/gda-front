import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVuesSynthetiquesHistogrammeComponent } from './page-vues-synthetiques-histogramme.component';

describe('PageVuesSynthetiquesHistogrammeComponent', () => {
  let component: PageVuesSynthetiquesHistogrammeComponent;
  let fixture: ComponentFixture<PageVuesSynthetiquesHistogrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageVuesSynthetiquesHistogrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVuesSynthetiquesHistogrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
