import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksMarvelComponent } from './links-marvel.component';

describe('LinksMarvelComponent', () => {
  let component: LinksMarvelComponent;
  let fixture: ComponentFixture<LinksMarvelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksMarvelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
