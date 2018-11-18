import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelInfoComponent } from './marvel-info.component';

describe('MarvelInfoComponent', () => {
  let component: MarvelInfoComponent;
  let fixture: ComponentFixture<MarvelInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
