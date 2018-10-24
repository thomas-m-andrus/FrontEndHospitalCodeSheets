import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTemplate1Component } from './header-template-1.component';

describe('HeaderTemplate1Component', () => {
  let component: HeaderTemplate1Component;
  let fixture: ComponentFixture<HeaderTemplate1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTemplate1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTemplate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
