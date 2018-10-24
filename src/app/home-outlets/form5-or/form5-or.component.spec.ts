import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form5ORComponent } from './form5-or.component';

describe('Form5ORComponent', () => {
  let component: Form5ORComponent;
  let fixture: ComponentFixture<Form5ORComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form5ORComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form5ORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
