import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVuesSynthetiquesManagerComponent } from './page-vues-synthetiques-manager.component';

describe('PageVuesSynthetiquesManagerComponent', () => {
  let component: PageVuesSynthetiquesManagerComponent;
  let fixture: ComponentFixture<PageVuesSynthetiquesManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageVuesSynthetiquesManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVuesSynthetiquesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
