import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form2SeizureComponent } from './form2-seizure.component';

describe('Form2SeizureComponent', () => {
  let component: Form2SeizureComponent;
  let fixture: ComponentFixture<Form2SeizureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form2SeizureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form2SeizureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
