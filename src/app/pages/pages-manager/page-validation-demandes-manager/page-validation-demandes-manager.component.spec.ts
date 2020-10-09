import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageValidationDemandesManagerComponent } from './page-validation-demandes-manager.component';

describe('PageValidationDemandesManagerComponent', () => {
  let component: PageValidationDemandesManagerComponent;
  let fixture: ComponentFixture<PageValidationDemandesManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageValidationDemandesManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageValidationDemandesManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
