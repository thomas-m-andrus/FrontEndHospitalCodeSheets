import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form4NICUComponent } from './form4-nicu.component';

describe('Form4NICUComponent', () => {
  let component: Form4NICUComponent;
  let fixture: ComponentFixture<Form4NICUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form4NICUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form4NICUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
