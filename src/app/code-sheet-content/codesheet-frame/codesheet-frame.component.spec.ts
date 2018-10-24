import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodesheetFrameComponent } from './codesheet-frame.component';

describe('CodesheetFrameComponent', () => {
  let component: CodesheetFrameComponent;
  let fixture: ComponentFixture<CodesheetFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodesheetFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodesheetFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
