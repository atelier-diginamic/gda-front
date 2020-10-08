import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdministrateurComponent } from './page-administrateur.component';

describe('PageAdministrateurComponent', () => {
  let component: PageAdministrateurComponent;
  let fixture: ComponentFixture<PageAdministrateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAdministrateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAdministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
