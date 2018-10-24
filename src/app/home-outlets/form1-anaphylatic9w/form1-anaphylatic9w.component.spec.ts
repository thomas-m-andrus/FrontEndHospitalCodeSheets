import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form1Anaphylatic9wComponent } from './form1-anaphylatic9w.component';

describe('Form1Anaphylatic9wComponent', () => {
  let component: Form1Anaphylatic9wComponent;
  let fixture: ComponentFixture<Form1Anaphylatic9wComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form1Anaphylatic9wComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form1Anaphylatic9wComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
