import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTemplate2Component } from './table-template-2.component';

describe('TableTemplate2Component', () => {
  let component: TableTemplate2Component;
  let fixture: ComponentFixture<TableTemplate2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTemplate2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTemplate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
