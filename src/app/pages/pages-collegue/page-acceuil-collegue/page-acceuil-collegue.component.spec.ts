import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAcceuilCollegueComponent } from './page-acceuil-collegue.component';

describe('PageCollegueComponent', () => {
  let component: PageAcceuilCollegueComponent;
  let fixture: ComponentFixture<PageAcceuilCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAcceuilCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAcceuilCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
