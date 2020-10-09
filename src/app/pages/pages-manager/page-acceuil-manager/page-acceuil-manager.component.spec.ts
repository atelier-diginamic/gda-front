import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAcceuilManagerComponent } from './page-acceuil-manager.component';

describe('PageAcceuilManagerComponent', () => {
  let component: PageAcceuilManagerComponent;
  let fixture: ComponentFixture<PageAcceuilManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAcceuilManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAcceuilManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
