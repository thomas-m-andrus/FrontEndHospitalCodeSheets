import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form3PICUComponent } from './form3-picu.component';

describe('Form3PICUComponent', () => {
  let component: Form3PICUComponent;
  let fixture: ComponentFixture<Form3PICUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form3PICUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form3PICUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
