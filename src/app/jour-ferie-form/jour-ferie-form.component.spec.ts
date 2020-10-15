import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JourFerieFormComponent } from './jour-ferie-form.component';

describe('JourFerieFormComponent', () => {
  let component: JourFerieFormComponent;
  let fixture: ComponentFixture<JourFerieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JourFerieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JourFerieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
