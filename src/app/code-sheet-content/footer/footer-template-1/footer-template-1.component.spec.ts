import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTemplate1Component } from './footer-template-1.component';

describe('FooterTemplate1Component', () => {
  let component: FooterTemplate1Component;
  let fixture: ComponentFixture<FooterTemplate1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterTemplate1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTemplate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
